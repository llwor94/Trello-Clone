const express = require('express');
const router = express.Router();
const db = require('../../database/dbConfig');

router.get('/', (req, res, next) => {
  db('boards')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
});

module.exports = router;
