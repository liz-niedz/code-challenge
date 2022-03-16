/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("items", (table) => {
        table.increments("item_id").primary();
        table.string("item_name");
        table.text("item_description");
        table.integer("quantity");
        table.date("date_added");
        table.time("time_added");
        table.timestamps(true, true);

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("items");
};
