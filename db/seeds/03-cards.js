exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        { title: 'Test card 1' },
        { title: 'Second test card' },
        { title: 'Another test card' },
        { title: 'test card yay' },
        { title: 'gonnna test more cardz' },
      ]);
    });
};
