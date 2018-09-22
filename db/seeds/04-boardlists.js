exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('board_lists')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('board_lists').insert([
        { board_id: 1, list_id: 1 },
        { board_id: 1, list_id: 2 },
        { board_id: 2, list_id: 3 },
      ]);
    });
};
