
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('fields_players', function(table) {
      table.increments().notNullable().primary();
      table.integer('field_id').unsigned().references('id').inTable('fields').notNull().onDelete('cascade');
      table.integer('player_id').unsigned().references('id').inTable('players').notNull().onDelete('cascade');
      table.float('value');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('fields_players')
  ]);
};