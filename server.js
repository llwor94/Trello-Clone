const express = require('express');
const morgan = require('morgan');
// const feathers = require('@feathersjs/feathers');
// const express = require('@feathersjs/express');
const cors = require('cors');
// const service = require('feathers-knex');
require('./passport');
const configureRoutes = require('./config');
const db = require('./db/dbConfig');

const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.configure(express.rest());

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// app.use(
//   '/boards',
//   service({
//     Model: db,
//     name: 'boards',
//   }),
// );

// app
//   .service('boards')
//   .find()
//   .then(boards => console.log(boards));
configureRoutes(app);

// server.get('/', (req, res) => {
//   res.json('ya made it mon');
// });

module.exports = app;

// const port = process.env.PORT || 3400;
// app.listen(port, () => {
//   console.log(`\n=== Server listening on port ${port}\n`);
// });
