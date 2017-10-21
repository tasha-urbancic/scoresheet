
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('fields', function(table) {
      table.increments().notNullable().primary();
      table.integer('template_id').unsigned().references('id').inTable('templates').notNull().onDelete('cascade');
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('fields')
  ]);
};
