
exports.up = function(knex) {
  return knex.schema.table('acf', (table) => {
    table.renameColumn('ACF', 'acf');
  })
};

exports.down = function(knex) {
  return knex.schema.table('acf', (table) => {
    table.renameColumn('acf', 'ACF');
  })
};