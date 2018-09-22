const express = require('express');
const router = express.Router();
const db = require('../../db/dbConfig');

router.get('/', (req, res, next) => {
  db('boards')
    .then(data => {
      if (data) return res.status(200).json(data);
      return res.status(200).json([]);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  db('boards')
    .where({ id: req.params.id })
    .first()
    .then(board => {
      if (!board) return next({ code: 404 });
      res.status(200).json(board);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  let title = req.body.title;

  if (!title || title === '') next({ code: 400 });

  db('boards')
    .insert({ title })
    .then(data => {
      return res.status(201).json(data);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  let title = req.body.title;

  if (!title || title === '') next({ code: 400 });

  db('boards')
    .where({ id: req.params.id })
    .update({ title })
    .then(response => {
      if (!response) return next({ code: 404 });
      res.status(200).json('Update successful');
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  db('boards')
    .where({ id: req.params.id })
    .del()
    .then(response => {
      if (!response) return next({ code: 404 });
      res.status(200).json('Delete successful');
    })
    .catch(next);
});

module.exports = router;
