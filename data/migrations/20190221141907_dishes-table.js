
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(t) {
    t.increments();
    t.string('name').notNullable();
    t.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
