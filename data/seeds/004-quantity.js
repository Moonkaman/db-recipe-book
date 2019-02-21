
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {name: 'rowValue1', recepie_id: 1, ingredient_id: 4, measurement_id: 3, quantity: 1},
        {name: 'rowValue2', recepie_id: 1, ingredient_id: 1, measurement_id: 1, quantity: .5},
        {name: 'rowValue3', recepie_id: 1, ingredient_id: 2, measurement_id: 1, quantity: .5},
        {name: 'rowValue3', recepie_id: 1, ingredient_id: 3, measurement_id: 2, quantity: .5},
        {name: 'rowValue3', recepie_id: 2, ingredient_id: 5, measurement_id: 1, quantity: 1},
        {name: 'rowValue3', recepie_id: 2, ingredient_id: 6, measurement_id: 4, quantity: 1},
        {name: 'rowValue3', recepie_id: 3, ingredient_id: 7, measurement_id: 1, quantity: 1},
        {name: 'rowValue3', recepie_id: 3, ingredient_id: 8, measurement_id: 1, quantity: 1}
      ]);
    });
};
