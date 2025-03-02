console.log('Web Serverni boshlash');
const express = require('express');
const app = express();

const db = require('./server').db();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.post('/create-item', (req, res) => {
  console.log('user entered /create-item');
  const newReja = req.body.reja;

  db.collection('plans').insertOne({ reja: newReja }, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Something went wrong while inserting data.');
    }

    if (result.ops) {
      console.log(result.ops);
      return res.json(result.ops[0]);
    }

    const insertedDoc = {
      _id: result.insertedId,
      reja: newReja,
    };
    console.log(insertedDoc);
    return res.json(insertedDoc);
  });
});

app.get('/', (req, res) => {
  console.log('user entered /');
  db.collection('plans')
    .find()
    .toArray((err, data) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .send('Something went wrong while fetching data.');
      }
      console.log(data);

      res.render('reja', { items: data });
    });
});

module.exports = app;
