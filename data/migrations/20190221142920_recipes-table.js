exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(t) {
    t.increments();
    t.string('name').notNullable();
    t.text('instructions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
