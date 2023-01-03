import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import { Services } from './services'

const Technicians = sequelize.define(
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
      type: DataTypes.INTEGER,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    cellPhone: {
      type: DataTypes.INTEGER,
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

Technicians.hasMany(Services, {
  foreignKey: 'technicianId',
  sourceKey: 'id'
})

Services.belongsTo(Technicians, {
  foreignKey: 'technicianId',
  targetKey: 'id'
})

export { Technicians }
