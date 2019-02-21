
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Ground Beef'},
        {name: 'Cheese'},
        {name: 'Lettuce'},
        {name: 'Taco Shell'},
        {name: 'Spaghetti Noodles'},
        {name: 'Pasta Sauce'},
        {name: 'Milk'},
        {name: 'Cereal'},
      ]);
    });
};
