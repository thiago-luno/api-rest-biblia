
exports.up = function(knex) {
  return knex.schema.alterTable('authors', function(table) {
    table.string('description').nullable();
  })
};

exports.down = function(knex) {
  // return knex.schema.alterTable('authors', function(table) {
  //   table.dropColumns('description');
  // })
};
