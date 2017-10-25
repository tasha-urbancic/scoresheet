const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

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
// app.use(express.static("public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/*', (req, res) => {
  // 'Attempting to get /*, let\'s see how this goes:';
  res.sendFile('../../index.html');
  // ('It did not break during the app.get from server.js');
});

app.listen(PORT, () => {
  console.log('HTTP Server listening on port ' + PORT);
});
