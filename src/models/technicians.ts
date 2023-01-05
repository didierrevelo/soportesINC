import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
// import { Services } from './services'
import {
  TechniciansModel,
  TechniciansAddModels
} from '../interfaces/technicians.interfaces'

const Technicians = sequelize.define<TechniciansModel, TechniciansAddModels>(
  'technicians', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: {
      type: DataTypes.STRING,
      unique: true
    },
    documentNumber: {
      type: DataTypes.DOUBLE,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    cellPhone: {
      type: DataTypes.DOUBLE,
      unique: true
    },
    address: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

// Technicians.hasMany(Services, {
//   foreignKey: 'technicianId',
//   sourceKey: 'id'
// })

// Services.belongsTo(Technicians, {
//   foreignKey: 'technicianId',
//   targetKey: 'id'
// })

export { Technicians, TechniciansModel, TechniciansAddModels }
