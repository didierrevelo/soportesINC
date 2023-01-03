import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'

const Services = sequelize.define(
  'services',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typeService: {
      type: DataTypes.ENUM('instalacion', 'matenimiento', 'reparacion'),
      defaultValue: 'instalacion'
    },
    technicalId: {
      type: DataTypes.INTEGER
    },
    visitDay: {
      type: DataTypes.DATE
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    comments: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

export { Services }
