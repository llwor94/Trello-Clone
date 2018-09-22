exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_cards', table => {
    table.integer('card_id').unsigned();
    table.integer('list_id').unsigned();
    table.foreign('card_id').references('cards.id');
    table.foreign('list_id').references('lists.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_cards');
};
