import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import {
  ServicesModel,
  ServicesAddModels
} from '../interfaces/services.interfaces'
import { Technicians } from './technicians'

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
    },
    userId: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: true
  }
)

async function findAllData (): Promise<any> {
  Services.belongsTo(Technicians, {
    foreignKey: 'technicianId'
  })
  return await Services.findAll({
    include: [
      {
        model: Technicians,
        attributes: [
          'fullName',
          'email',
          'cellPhone'
        ]
      }
    ]
  })
}
async function findOneData (id: any): Promise<any> {
  Services.belongsTo(Technicians, {
    foreignKey: 'technicianId'
  })
  return await Services.findByPk(id, {
    include: [
      {
        model: Technicians,
        attributes: [
          'fullName',
          'email',
          'cellPhone'
        ]
      }
    ]
  })
}
export { Services, ServicesModel, ServicesAddModels, findAllData, findOneData }
