import pg from 'pg';
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: 'Q1W2E3R44r3e2w1q',
  port: 5432,
});

db.connect();
db.query('SELECT * FROM capitals', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    let quiz = res.rows;
    console.log(quiz);
  }
  db.end();
});
