
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {recipe_id: 1, ingredient_id: 4, measurement_id: 3, amount: 1},
        {recipe_id: 1, ingredient_id: 1, measurement_id: 1, amount: .5},
        {recipe_id: 1, ingredient_id: 2, measurement_id: 1, amount: .5},
        {recipe_id: 1, ingredient_id: 3, measurement_id: 2, amount: .5},
        {recipe_id: 2, ingredient_id: 5, measurement_id: 1, amount: 1},
        {recipe_id: 2, ingredient_id: 6, measurement_id: 4, amount: 1},
        {recipe_id: 3, ingredient_id: 7, measurement_id: 1, amount: 1},
        {recipe_id: 3, ingredient_id: 8, measurement_id: 1, amount: 1}
      ]);
    });
};
