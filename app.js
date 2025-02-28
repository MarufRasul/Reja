console.log('Web Serverni boshlash');
const express = require('express');
const res = require('express/lib/response');
const app = express();

//MongoDB connect
const db = require('./server').db();

// Подключаем статику (CSS, изображения и т. д.)
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Устанавливаем движок шаблонов EJS
app.set('views', 'views');
app.set('view engine', 'ejs');

app.post('/create-item', (req, res) => {
  console.log('user entered/create-item');
  const new_reja = req.body.reja;
  db.collection('plans').insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end('something went wrong');
    } else {
      res.json({ message: 'Successfully added' });
    }
  });
});

app.get('/', (req, res) => {
  console.log('user entered /');
  db.collection('plans')
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end('something went wrong');
      } else {
        console.log(data);
        res.render('reja', { items: data });
      }
    });
});
module.exports = app;
