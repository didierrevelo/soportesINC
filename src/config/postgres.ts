import 'dotenv/config'
import { Sequelize } from 'sequelize'

/**
 * initialize the environment variables for the connection to the database
 *
 */
const database: any = process.env.NAME_DB
const username: any = process.env.USER_NAME
const password: any = process.env.PASSWORD
const host: any = process.env.HOST
const dialect: any = process.env.DIALECT

/**
 * set the information about the connection to the database
 */
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
})

export { sequelize }
