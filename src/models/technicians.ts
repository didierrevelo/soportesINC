import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import { Services } from './services'
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
    },
    role: {
      type: DataTypes.ENUM('tech'),
      defaultValue: 'tech'
    }
  },
  {
    timestamps: true
  }
)

async function findAllData (): Promise<any> {
  Technicians.hasMany(Services, {
    foreignKey: 'technicianId'
  })

  return await Technicians.findAll({
    include: [
      {
        model: Services,
        attributes: [
          'id',
          'typeService',
          'visitDay',
          'done',
          'comments'
        ]
      }
    ]
  })
}

async function findOneData (id: any): Promise<any> {
  Technicians.hasMany(Services, {
    foreignKey: 'technicianId'
  })

  return await Technicians.findByPk(id, {
    include: [
      {
        model: Services,
        attributes: [
          'id',
          'typeService',
          'visitDay',
          'done',
          'comments'
        ]
      }
    ]
  })
}

export {
  Technicians,
  TechniciansModel,
  TechniciansAddModels,
  findOneData,
  findAllData
}
