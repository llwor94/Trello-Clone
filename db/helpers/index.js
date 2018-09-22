const db = require('../dbConfig');

module.exports = {
  getBoardLists(id) {
    return db('lists as l')
      .join('board_lists as bl', 'bl.list_id', 'l.id')
      .join('boards as b', 'bl.board_id', 'b.id')
      .select('l.id', 'l.title', 'b.title as board')
      .where('bl.board_id', id);
  },

  getList(id) {
    return db('lists as l')
      .join('board_lists as bl', 'bl.list_id', 'l.id')
      .join('boards as b', 'bl.board_id', 'b.id')
      .select('l.id', 'l.title', 'b.title as board')
      .where('bl.list_id', id)
      .first();
  },

  addList(board_id, title) {
    return db('lists')
      .insert({ title })
      .then(ids => {
        list_id = ids[0];
        return db('board_lists').insert({ board_id, list_id });
      });
  },
};
