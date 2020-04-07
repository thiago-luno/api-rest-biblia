exports.up = function(knex) {
  return knex.schema.alterTable('testaments', function(table) {
    table.string('NVT').nullable().after('NVI');
  })
};

exports.down = function(knex) {
   return knex.schema.alterTable('testaments', function(table) {
    table.dropColumns('NVT');
  })
};