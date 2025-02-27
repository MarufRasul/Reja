console.log('Web Serverni boshlash');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs = require('fs');

//MongoDB connect
const db = require('./server').db();
let user = {}; // Если файл не загрузится, переменная user не будет пустой

// Загружаем user.json
fs.readFile('database/user.json', 'utf8', (err, data) => {
  if (err) {
    console.log('ERROR:', err);
  } else {
    user = JSON.parse(data);
  }
});

// Подключаем статику (CSS, изображения и т. д.)
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Устанавливаем движок шаблонов EJS
app.set('views', 'views');
app.set('view engine', 'ejs');

// Проверяем, работает ли сервер
app.get('/author', (req, res) => {
  console.log('Rendering author page');
  res.render('author', { user: user });
});

app.get('/', (req, res) => {
  console.log('Rendering harid page');
  res.render('reja');
});
module.exports = app;
