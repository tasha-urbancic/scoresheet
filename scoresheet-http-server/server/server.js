const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';
const app = require('express')();
const bodyParser = require('body-parser');

const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);

const routes = require('./routes');

app.use(routes);

// app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('HTTP Server listening on port ' + PORT);
});
