import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>This is homepage</h1>');
});
app.get('/About', (req, res) => {
  res.send('<h1>This is about me</h1>');
});
app.get('/contact', (req, res) => {
  res.send('<h1>This is the contanct page</h1>');
});
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
