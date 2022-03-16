const items = require("../fixtures/items");


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
  .raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE")
  .then(function () {
    return knex("items").insert(items);
  });
};
