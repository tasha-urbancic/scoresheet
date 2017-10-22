
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('players', function(table) {
      table.increments().notNullable().primary();
      table.string('name').notNullable();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
      table.integer('game_id').unsigned().references('id').inTable('games').notNull().onDelete('cascade');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players')
  ]);
};