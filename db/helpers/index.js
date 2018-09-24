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

  // addList(board_id, title) {
  //   return db('lists')
  //     .insert({ title })
  //     .then(ids => {
  //       list_id = ids[0];
  //       return db('board_lists').insert({ board_id, list_id });
  //     });
  // },
};
