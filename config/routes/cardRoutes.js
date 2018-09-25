const express = require('express');
const router = express.Router();
const db = require('../../db/dbConfig');
const helpers = require('../../db/helpers');

router.get('/', (req, res, next) => {
  console.log(req.query);
  let id = req.query.board;

  helpers
    .getBoardCards(id)
    .then(data => {
      if (data) return res.status(200).json(data);
      return res.status(200).json([]);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  helpers
    .getCard(req.params.id)
    .then(card => {
      if (!card) return next({ code: 404 });
      res.status(200).json(card);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  let title = req.body.title;
  let list_id = req.query.list;

  if (!title || title === '' || !list_id) next({ code: 400 });
  helpers
    .addCard(title, list_id)
    .then(data => {
      return res.status(201).json(data);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  let title = req.body.title;
  if (!title || title === '') next({ code: 400 });

  db('cards')
    .where({ id: req.params.id })
    .update({ title })
    .then(response => {
      if (!response) return next({ code: 404 });
      res.status(200).json('Update successful');
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  db('cards')
    .where({ id: req.params.id })
    .del()
    .then(response => {
      if (!response) return next({ code: 404 });
      res.status(200).json('Delete successful');
    })
    .catch(next);
});

module.exports = router;
