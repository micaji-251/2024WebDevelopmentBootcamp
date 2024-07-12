import express from 'express';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res)=> {
  console.log(req.body)
  res.send('Street Name: ' + req.body.street + ' Pet Name: '+ req.body.pet);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
