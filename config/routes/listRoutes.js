const express = require('express');
const router = express.Router();
const helpers = require('../../db/helpers');

router.get('/', (req, res, next) => {
  let id = req.query.board;

  helpers
    .getBoardLists(id)
    .then(data => {
      if (data) return res.status(200).json(data);
      return res.status(200).json([]);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  helpers
    .getList(req.params.id)
    .then(board => {
      if (!board) return next({ code: 404 });
      res.status(200).json(board);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  let title = req.body.title;
  let id = req.query.board;

  if (!title || title === '') next({ code: 400 });
  helpers
    .addList(id, title)
    .then(data => {
      return res.status(201).json(data);
    })
    .catch(next);
});

module.exports = router;
