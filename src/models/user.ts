import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres'
import { Services } from './services'

const Users = sequelize.define(
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
      type: DataTypes.INTEGER,
      unique: true
    },
    email: {
      type: DataTypes.STRING
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

export { Users }
