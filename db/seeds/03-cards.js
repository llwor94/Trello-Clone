exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        { title: 'Test card 1', list_id: 1, board_id: 1 },
        { title: 'Second test card', list_id: 1, board_id: 1 },
        { title: 'Another test card', list_id: 2, board_id: 1 },
        { title: 'test card yay', list_id: 2, board_id: 1 },
        { title: 'gonnna test more cardz', list_id: 3, board_id: 2 },
      ]);
    });
};
