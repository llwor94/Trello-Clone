exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list_cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('list_cards').insert([
        { list_id: 1, card_id: 1 },
        { list_id: 1, card_id: 2 },
        { list_id: 2, card_id: 3 },
        { list_id: 2, card_id: 4 },
        { list_id: 3, card_id: 5 },
      ]);
    });
};
