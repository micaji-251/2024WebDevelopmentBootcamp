import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: 'Q1W2E3R44r3e2w1q',
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

async function checkVisited() {
  const result = await db.query('SELECT country_code FROM visited_countries');

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// RENDERIZA LA PANTALLA DE PAISES A PARTIR DE LA TABLA DE countries_visited
app.get('/', async (req, res) => {
  const countries = await checkVisited();
  res.render('index.ejs', { total: countries.length, countries: countries });
});

// AQUI SE OBTIENE EL VALOR DEL PAIS QUE INGRESO EL USUARIO
app.post('/add', async (req, res) => {
  let answer = req.body.country.trim();

  const result = await db.query(
    'SELECT country_code FROM countries WHERE country_name = $1',
    [answer]
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const newCountryCode = data.country_code;
    await db.query('INSERT INTO visited_countries(country_code) VALUES ($1)', [
      newCountryCode,
    ]);
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
