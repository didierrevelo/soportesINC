import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import {
  UsersModel,
  UsersAddModels
} from '../interfaces/users.interfaces'
import { Services } from './services'

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

Users.hasMany(Services, {
  foreignKey: 'userId',
  sourceKey: 'id'
})

Services.belongsTo(Users, {
  foreignKey: 'userId',
  targetKey: 'id'
})

export { Users, UsersModel, UsersAddModels }
