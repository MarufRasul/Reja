const http = require('http');
const { MongoClient } = require('mongodb');

const connectionString =
  'mongodb+srv://MarufRasul:241316@cluster0.xekjx.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0';

MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log('MongoDB connection succeeded');
    module.exports = client;

    // Импортируем app после успешного подключения
    const app = require('./app');

    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.error('ERROR on connection MongoDB', err);
  });
