exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments();
    table.string('title', 128).notNullable();
    table.text('description');
    table.integer('list_id').unsigned();
    table.integer('board_id').unsigned();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .foreign('list_id')
      .references('lists.id')
      .onDelete('CASCADE');
    table
      .foreign('board_id')
      .references('boards.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cards');
};
