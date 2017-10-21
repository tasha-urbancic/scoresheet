
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('templates', function(table) {
      table.increments().notNullable().primary();
      table.string('name').notNullable();
      table.text('footer');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('templates')
  ]);
};

