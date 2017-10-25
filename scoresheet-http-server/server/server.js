const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);

const routes = require('./routes');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.static("scoresheet-app/build"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../index.html'));
});

app.listen(PORT, () => {
  console.log('HTTP Server listening on port ' + PORT);
});
