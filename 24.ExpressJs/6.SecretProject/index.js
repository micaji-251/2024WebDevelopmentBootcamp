//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

// Pagina basica donde se va a recolectar la contraseña
app.get('/', (req, res) => {
  res.sendFile(_dirname + '/public/index.html');
});
// Cuando se presione el submit, necesito que se guarde el valor de la contraseña, si este es igual a la contraseña, debe rederigirte a /secret

app.get('/check', (req, res) => {
    res.sendFile(_dirname + '/public/secret.html');
});

app.post('/check', (req, res) => {
  console.log(req.body.password);
  if (req.body.password === 'ILoveProgramming') {
    res.redirect('/check');
  } else {
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log('The server is starting in port: ' + port);
});
