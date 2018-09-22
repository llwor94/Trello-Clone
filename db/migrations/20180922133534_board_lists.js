exports.up = function(knex, Promise) {
  return knex.schema.createTable('board_lists', table => {
    table.integer('board_id').unsigned();
    table.integer('list_id').unsigned();
    table.foreign('board_id').references('boards.id');
    table.foreign('list_id').references('lists.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('board_lists');
};
