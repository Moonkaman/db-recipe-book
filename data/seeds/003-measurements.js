
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {name: 'Cup'},
        {name: 'Handful'},
        {name: 'Of Item'},
        {name: 'Teaspoon'},
        {name: 'Tablespoon'},
        {name: 'Oz'}
      ]);
    });
};
