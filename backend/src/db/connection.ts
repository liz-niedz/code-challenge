const env = process.env.NODE_ENV || "developemnt";
const config = require("../../knexfile")[env];
const  knex = require("knex")(config);

export default knex;