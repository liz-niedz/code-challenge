const path = require("path");
require("dotenv").config();
const { 
  DATABASE_URL = "postgres://wcztdeqc:is05p35NVuYl0WrLQCQ3WHFE8nAWxYOV@salt.db.elephantsql.com/wcztdeqc",
 } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
            directory: path.join(__dirname, "src", "db", "seeds"),
          },
  },
};