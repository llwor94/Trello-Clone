exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('boards').insert([
        { title: 'Test board 1' },
        { title: 'Second test board' },
      ]);
    });
};
