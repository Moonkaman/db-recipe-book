
exports.up = function(knex, Promise) {
  return knex.schema.createTable('measurements', function(t) {
    t.increments();
    t.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('measurements');
};
