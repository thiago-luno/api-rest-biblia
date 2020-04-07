
exports.up = function(knex) {
  return knex.schema.alterTable('testaments', function(table) {
    table.dropColumns('NVT');
  })
};

exports.down = function(knex) {
  
};
