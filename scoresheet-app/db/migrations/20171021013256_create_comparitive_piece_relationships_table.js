exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comparitive_piece_relationships', function(table) {
      table.increments().notNullable().primary();
      table.integer('relationship_id').unsigned().references('id').inTable('relationships').notNull().onDelete('cascade');
      table.string('sort_verb').notNull();
      table.integer('field_id').unsigned().references('id').inTable('fields').notNull();
      table.float('value').notNull();
      table.string('on_tie').notNull();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comparitive_piece_relationships')
  ]);
};