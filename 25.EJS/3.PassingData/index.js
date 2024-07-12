import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let number = 0;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs', { number });
});

app.post('/submit', (req, res) => {
  console.log(req.body.fName, req.body.lName);
  let name = req.body.fName;
  let lastName = req.body.lName;
  number = name.length + lastName.length;

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
