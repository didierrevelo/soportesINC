import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'

const Items = sequelize.define(
  'item',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    reference: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    amount: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.INTEGER
    }
  }
)

export { Items }
