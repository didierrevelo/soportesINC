import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import {
  ServicesModel,
  ServicesAddModels
} from '../interfaces/services.interfaces'

const Services = sequelize.define<ServicesModel, ServicesAddModels>(
  'services',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typeService: {
      type: DataTypes.ENUM('instalacion', 'mantenimiento', 'reparacion')
    },
    visitDay: {
      type: DataTypes.DATE('YYYY-MM-DD')
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    comments: {
      type: DataTypes.STRING
    },
    technicianId: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: true
  }
)

export { Services, ServicesModel, ServicesAddModels }
