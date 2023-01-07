import * as Sequelize from 'sequelize'
import { sequelize } from '../config/postgres'
import {
  ItemsModel,
  ItemsAddModels
} from '../interfaces/items.interfaces'
import { Users } from './user'

const Item = sequelize.define<ItemsModel, ItemsAddModels>('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  reference: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER
  }
})

async function findAllData (): Promise<any> {
  Item.belongsTo(Users, {
    foreignKey: 'userId'
  })
  return await Item.findAll({
    include: [
      {
        model: Users,
        attributes: [
          'id',
          'fullName',
          'email',
          'cellPhone'
        ]
      }
    ]
  })
}
async function findOneData (id: any): Promise<any> {
  Item.belongsTo(Users, {
    foreignKey: 'userId'
  })
  return await Item.findByPk(id, {
    include: [
      {
        model: Users,
        attributes: [
          'id',
          'fullName',
          'email',
          'cellPhone'
        ]
      }
    ]
  })
}

export { Item, ItemsAddModels, ItemsModel, findAllData, findOneData }
