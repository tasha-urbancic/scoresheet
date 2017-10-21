
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('templates', function(table) {
      table.increments().notNullable().primary();
      table.integer('user_id').unsigned().references('id').inTable('users').notNull().onDelete('cascade');
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

