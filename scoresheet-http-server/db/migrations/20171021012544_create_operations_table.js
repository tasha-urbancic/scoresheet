exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('operations', function(table) {
      table.increments().notNullable().primary();
      table.integer('field_id').notNull().unsigned().references('id').inTable('fields');
      table.string('operator').notNull();
      table.float('number').notNull();
      table.integer('individual_piece_relationship_id').unsigned().references('id').inTable('individual_piece_relationships').notNull();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('operations')
  ]);
};
