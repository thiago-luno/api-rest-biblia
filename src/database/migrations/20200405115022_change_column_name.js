exports.up = function(knex) {
  return knex.schema.table('nvi', (table) => {
    table.renameColumn('NVI', 'nvi');
  })
};

exports.down = function(knex) {
  return knex.schema.table('nvi', (table) => {
    table.renameColumn('nvi', 'NVI');
  })
};