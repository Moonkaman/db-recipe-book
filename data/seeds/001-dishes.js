
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Taco', recipe_id: 1},
        {name: 'Spaghetti', recipe_id: 2},
        {name: 'Cereal', recipe_id: 3}
      ]);
    });
};
