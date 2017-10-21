
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('individual_piece_relationships', function(table) {
      table.increments().notNullable().primary();
      table.integer('relationship_id').unsigned().references('id').inTable('relationships').notNull().onDelete('cascade');
      table.float('value').notNull();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('individual_piece_relationships')
  ]);
};
