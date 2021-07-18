const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('js'));
app.use(express.static('css'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  })