exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('lists').insert([
        { title: 'Test list 1' },
        { title: 'Second test list' },
        { title: 'Another test list' },
      ]);
    });
};
