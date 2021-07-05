exports.up = function(knex, Promise) {
  return knex.schema.createTable('quantity', function(t) {
    t.increments();
    t.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      .notNullable();

    t.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      .notNullable();

    t.integer('measurement_id')
      .unsigned()
      .references('id')
      .inTable('measurements')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      .notNullable();

    t.float('amount').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quantity');
};
