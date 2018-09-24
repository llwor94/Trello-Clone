exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', table => {
    table.increments();
    table.string('title', 128).notNullable();
    table.integer('board_id').unsigned();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .foreign('board_id')
      .references('boards.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lists');
};
