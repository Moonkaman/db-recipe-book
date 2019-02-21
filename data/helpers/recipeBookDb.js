const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add
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