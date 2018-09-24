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
};
