"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAutenticate = exports.sequelize = void 0;
require("dotenv/config");
const sequelize_1 = require("sequelize");
/**
 * initialize the environment variables for the connection to the database
 *
 */
const database = process.env.NAME_DB;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;
/**
 * set the information about the connection to the database
 */
const sequelize = new sequelize_1.Sequelize(database, username, password, {
    host,
    dialect
});
exports.sequelize = sequelize;
const dbAutenticate = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
};
exports.dbAutenticate = dbAutenticate;
