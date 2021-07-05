const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add,
  getRecipeById
}

function get(table) {
  return db(table);
}

function getById(table, id) {
  return db(table)
    .where({id: id})
    .first();
}

function add(table, item) {
  return db(table)
    .insert(item)
    .then(id => getById(table, id[0]))
    .catch(err => err);
}

function getRecipeById(id) {
  return db.select('d.name as Dish', 'r.name as Recipe', 'q.amount as Amount', 'm.name as Unit', 'i.name as Ingredient')
  .from('quantity as q')
  .innerJoin('recipes as r', 'q.recipe_id', 'r.id')
  .innerJoin('dishes as d', 'r.id', 'd.recipe_id')
  .innerJoin('measurements as m', 'q.measurement_id', 'm.id')
  .innerJoin('ingredients as i', 'q.ingredient_id', 'i.id')
  .where('q.recipe_id', id);
}