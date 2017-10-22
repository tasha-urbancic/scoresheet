exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('operations', function(table) {
      table.increments().notNullable().primary();
      table.integer('number_one');
      table.integer('field_id_one').unsigned().references('id').inTable('fields');
      table.string('operator').notNull();
      table.integer('number_two');
      table.integer('field_id_two').unsigned().references('id').inTable('fields');
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
