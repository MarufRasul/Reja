console.log('Web Serverni boshlash');

const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

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

// Запуск сервера
const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port: ${PORT},http://localhost:${PORT}`
  );
});
