import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: 'Q1W2E3R44r3e2w1q',
  port: 5432,
});

db.connect();
let quiz = [{ id: 1, country: 'Peru', flags: '🇵🇪' }];

db.query('SELECT * FROM flags', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

const app = express();
const port = 3000;

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let currentQuestion = {};

// GET home page
app.get('/', (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render('index.ejs', { question: currentQuestion });
});

// POST a new post
app.post('/submit', (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.country.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  console.log(currentQuestion);
  res.render('index.ejs', {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
