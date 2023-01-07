import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import { Services } from './services'
import {
  UsersModel,
  UsersAddModels
} from '../interfaces/users.interfaces'

const Users = sequelize.define<UsersModel, UsersAddModels>(
  'users',
  {
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
      type: DataTypes.STRING
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
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user'
    }
  },
  {
    timestamps: true
  }
)

async function findAllData (): Promise<any> {
  Users.hasMany(Services, {
    foreignKey: 'userId',
    sourceKey: 'id'
  })
  Services.belongsTo(Users, {
    foreignKey: 'userId',
    targetKey: 'id'
  })
  return await Users.findAll({
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
  Users.hasMany(Services, {
    foreignKey: 'userId'
  })
  return await Users.findByPk(id, {
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
  Users,
  UsersModel,
  UsersAddModels,
  findOneData,
  findAllData
}
