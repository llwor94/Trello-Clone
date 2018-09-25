const db = require('../dbConfig');

module.exports = {
  getBoardLists(id) {
    return db('lists as l')
      .join('boards as b', 'b.id', 'l.board_id')
      .select('l.id', 'l.title', 'b.title as board')
      .where('l.board_id', id);
  },

  getList(id) {
    return db('lists as l')
      .join('boards as b', 'b.id', 'l.board_id')
      .select('l.id', 'l.title', 'b.title as board')
      .where('l.id', id)
      .first();
  },

  getBoardCards(id) {
    return db('cards as c')
      .join('boards as b', 'b.id', 'c.board_id')
      .join('lists as l', 'l.id', 'c.list_id')
      .select(
        'c.id',
        'c.title',
        'c.board_id',
        'c.list_id',
        'b.title as board',
        'l.title as list',
      )
      .where('c.board_id', id);
  },

  getCard(id) {
    return db('cards as c')
      .join('boards as b', 'b.id', 'c.board_id')
      .join('lists as l', 'l.id', 'c.list_id')
      .select(
        'c.id',
        'c.title',
        'c.board_id',
        'c.list_id',
        'b.title as board',
        'l.title as list',
      )
      .where('c.id', id)
      .first();
  },

  addCard(title, list_id) {
    return db('lists')
      .where({ id: list_id })
      .select('board_id')
      .first()
      .then(id => {
        let board_id = id.board_id;
        return db('cards').insert({ title, list_id, board_id });
      });
  },
};
