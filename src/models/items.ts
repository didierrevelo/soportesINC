import * as Sequelize from 'sequelize'
import { sequelize } from '../config/postgres'
import {
  ItemsModel,
  ItemsAddModels
} from '../interfaces/items.interfaces'

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
  }
})

export { Item, ItemsAddModels, ItemsModel }
