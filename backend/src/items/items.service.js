const knex = require("../db/connection");

function read(item_id) {
  return knex("items").select("*").where({ item_id }).first();
}

function list() {
  return knex("items").select("*");
}

function create(item) {
  return knex("items")
    .insert(item)
    .returning("*")
    .then((result) => result[0]);
}

function update(updatedItem) {
  return knex("items")
    .select("*")
    .where({ item_id: updatedItem.item_id })
    .update(updatedItem, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(item_id) {
  return knex("items").where({ item_id }).del();
}

module.exports = {
  read,
  list,
  create,
  update,
  delete: destroy,
};
