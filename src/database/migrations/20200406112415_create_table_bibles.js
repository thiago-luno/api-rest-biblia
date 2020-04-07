exports.up = function(knex) {
  return  knex.schema
    .createTable('bibles', function(table) {
      table.increments();
      table.string('cod').notNullable();
      table.string('name').notNullable();
      table.string('language').notNullable();
    })
};

exports.down = function(knex) {
  knex.schema.dropTable('bibles');
};