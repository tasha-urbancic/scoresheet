exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('operations', function(table) {
      table
        .integer('comparitive_piece_relationship_id')
        .unsigned()
        .references('id')
        .inTable('comparitive_piece_relationships')
        .notNull();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('operations', function(table) {
      table.dropColumn('comparitive_piece_relationship_id');
    })
  ]);
};
