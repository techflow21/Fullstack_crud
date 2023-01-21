import { Sequelize } from "sequelize";

const db = new Sequelize("fullstackcrud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
