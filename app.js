console.log('Web Serverni boshlash');
const express = require('express');
const mongodb = require('mongodb');
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
      console.log('Inserted doc:', result.ops[0]);
      return res.json(result.ops[0]);
    }

    const insertedDoc = {
      _id: result.insertedId,
      reja: newReja,
    };
    console.log('Inserted doc:', insertedDoc);
    return res.json(insertedDoc);
  });
});

app.post('/delete-item', (req, res) => {
  const id = req.body.id;
  console.log('Deleting item with id:', id);

  db.collection('plans').deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error while deleting');
      }
      console.log('Document deleted count:', data.deletedCount);
      res.json({ state: 'success' });
    }
  );
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
      console.log('Data from DB:', data);

      res.render('reja', { items: data });
    });
});

module.exports = app;
