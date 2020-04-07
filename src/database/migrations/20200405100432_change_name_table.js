exports.up = (knex) => {
  return knex.schema.renameTable('testaments', 'nvi');
 
};

exports.down = (knex) => {
  return knex.schema.renameTable('nvi', 'testaments');
};