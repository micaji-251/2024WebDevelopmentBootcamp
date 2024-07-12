import express from 'express';

const app = express();
const port = 3000;

let d = new Date();
let day = d.getDay();

app.get('/', (req, res) => {
  if (day === 0 || day === 6) {
    res.render('index.ejs', { time: 'weekend' });
  } else {
    res.render('index.ejs', { time: 'weekday' });
  }
});

app.listen(port, (req, res) => {
  console.log(`The server in the port ${port} is running`);
});
