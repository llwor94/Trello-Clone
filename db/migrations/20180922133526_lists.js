exports.up = function(knex, Promise) {
  return knex.schema.createTable('boards', table => {
    table.increments();
    table.string('title', 128).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('boards');
};
