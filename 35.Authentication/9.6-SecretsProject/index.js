import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import bcryptjs from 'bcryptjs';
import passport from 'passport';
import { Strategy } from 'passport-local';
import GoogleStrategy from 'passport-google-oauth2';
import session from 'express-session';
import env from 'dotenv';

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});

db.connect();

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.get('/secrets', async (req, res) => {
  if (req.isAuthenticated()) {
    //TODO: Update this to pull in the user secret to render in secrets.ejs
    const email = req.session.passport?.user?.username;

    const result = await db.query(
      'SELECT secret FROM users_secrets WHERE username = $1',
      [email]
    );
    const secret = result.rows[0].secret;
    if (secret === null) {
      const inputValue = "There isn't a secret";
      res.render('secrets.ejs', { secret: inputValue });
    } else {
      const inputValue = secret;
      res.render('secrets.ejs', { secret: inputValue });
    }
  } else {
    res.redirect('/login');
  }
});

//TODO: Add a get route for the submit button
//Think about how the logic should work with authentication.

app.get('/submit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('submit.ejs');
  } else {
    res.redirect('/login');
  }
});

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get(
  '/auth/google/secrets',
  passport.authenticate('google', {
    successRedirect: '/secrets',
    failureRedirect: '/login',
  })
);

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/secrets',
    failureRedirect: '/login',
  })
);

app.post('/register', async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query(
      'SELECT * FROM users_secrets WHERE username = $1',
      [email]
    );

    if (checkResult.rows.length > 0) {
      req.redirect('/login');
    } else {
      bcryptjs.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
        } else {
          const result = await db.query(
            'INSERT INTO users_secrets (username, password) VALUES ($1, $2) RETURNING *',
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log('success');
            res.redirect('/secrets');
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//TODO: Create the post route for submit.
//Handle the submitted data and add it to the database

app.post('/submit', async (req, res) => {
  const email = req.session.passport?.user?.username;
  const secret = req.body.secret;

  try {
    const result = await db.query(
      'UPDATE users_secrets SET secret = $1 WHERE username = $2 RETURNING *',
      [secret, email]
    );

    res.redirect('/secrets');
  } catch (error) {
    console.log(error);
  }
});
passport.use(
  'local',
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query(
        'SELECT * FROM users_secrets WHERE username = $1 ',
        [username]
      );
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcryptjs.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            console.error('Error comparing passwords:', err);
            return cb(err);
          } else {
            if (valid) {
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          }
        });
      } else {
        return cb('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.HOST_URL}/auth/google/secrets`,
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(profile);
        const result = await db.query(
          'SELECT * FROM users_secrets WHERE username = $1',
          [profile.email]
        );
        if (result.rows.length === 0) {
          const newUser = await db.query(
            'INSERT INTO users_secrets (username, password) VALUES ($1, $2)',
            [profile.email, 'google']
          );
          return cb(null, newUser.rows[0]);
        } else {
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
