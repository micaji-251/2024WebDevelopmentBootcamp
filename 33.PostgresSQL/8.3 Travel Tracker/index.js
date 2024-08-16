import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'prodequa',
  password: 'Q1W2E3R44r3e2w1q',
  port: 5432,
});

db.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// async function checkVisited() {
//   const result = await db.query('SELECT country_code FROM visited_countries');

//   let countries = [];
//   result.rows.forEach((country) => {
//     countries.push(country.country_code);
//   });
//   return countries;
// }

// RENDERIZA LA PANTALLA DE PAISES A PARTIR DE LA TABLA DE countries_visited
app.get('/get', async (req, res) => {
  let data = await db.query('SELECT * FROM ordenes');
  const response = data.rows;

  res.status(200).json({
    data: response,
  });
});

app.post('/post', async (req, res) => insertOrder(req, res));

async function insertOrder(req, res) {
  console.log(req.body);

  const { orderId, affiliateId, totalValue, origin } = req.body;

  if (affiliateId != undefined && affiliateId != '') {
    await db.query(
      'INSERT INTO ordenes(order_id,affiliated_id,ammount, first_item) VALUES ($1,$2,$3,$4)',
      [orderId, affiliateId, totalValue, origin]
    );
    res.status(200).json({
      message: 'Recibido',
    });
  } else {
    res.status(404).json({
      message: 'Afiliado faltante',
    });
  }
}

// AQUI SE OBTIENE EL VALOR DEL PAIS QUE INGRESO EL USUARIO
// app.post('/add', async (req, res) => {
//   let answer = req.body.country.trim();

//   const result = await db.query(
//     'SELECT country_code FROM countries WHERE country_name = $1',
//     [answer]
//   );

//   if (result.rows.length !== 0) {
//     const data = result.rows[0];
//     const newCountryCode = data.country_code;
//     await db.query('INSERT INTO visited_countries(country_code) VALUES ($1)', [
//       newCountryCode,
//     ]);
//   }
//   res.redirect('/');
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
