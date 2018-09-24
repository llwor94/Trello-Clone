exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments();
    table.string('title', 128).notNullable();
    table.integer('list_id').unsigned();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.foreign('list_id').references('lists.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cards');
};
