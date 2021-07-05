
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Plain Tacos', instructions: 'Make the taco'},
        {name: 'Plain Spaghetti', instructions: 'Make the spaghetti'},
        {name: 'Simple Cereal', instructions: 'Pour the cereal'}
      ]);
    });
};
