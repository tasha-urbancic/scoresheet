
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('pieces', function(table) {
      table.increments().notNullable().primary();
      table.string('equality').notNull();
      table.integer('number').notNull();
      table.integer('field_id').unsigned().references('id').inTable('fields').notNull();
      table.integer('individual_piece_relationship_id').unsigned().references('id').inTable('individual_piece_relationships').notNull();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('pieces')
  ]);
};
