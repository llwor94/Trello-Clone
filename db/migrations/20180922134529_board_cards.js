exports.up = function(knex, Promise) {
  return knex.schema.createTable('board_cards', table => {
    table.integer('board_id').unsigned();
    table.integer('card_id').unsigned();
    table.foreign('board_id').references('boards.id');
    table.foreign('card_id').references('cards.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('board_cards');
};
