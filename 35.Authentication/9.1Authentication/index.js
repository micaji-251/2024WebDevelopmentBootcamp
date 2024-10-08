import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'secrets',
  password: 'Q1W2E3R44r3e2w1q',
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query(
      'SELECT username FROM users WHERE username = $1',
      [email]
    );

    if (checkResult.rows.length > 0) {
      res.send('Email already exists. Try logging in.');
    } else {
      if (email && password) {
        const result = await db.query(
          'INSERT INTO users(username,password) VALUES ($1,$2)',
          [email, password]
        );
        console.log(result);
        res.render('secrets.ejs');
      } else {
        console.log('email or password is null, please enter a value');
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.post('/login', async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query(
      'SELECT username,password FROM users WHERE username = $1',
      [email]
    );
    if (checkResult.rows.length > 0) {
      if (checkResult.rows[0].password === password) {
        res.render('secrets.ejs');
      } else {
        res.send('User or password is wrong');
      }
    } else {
      res.send('User is not registered');
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
