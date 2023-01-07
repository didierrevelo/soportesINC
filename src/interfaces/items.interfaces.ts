import * as Sequelize from 'sequelize'

interface ItemsAddModels {
  id: number
  reference: string
  name: string
  amount: number
  description: string
  userId: number
}
interface ItemsModel extends Sequelize.Model<ItemsModel, ItemsAddModels> {
  id: number
  reference: string
  name: string
  amount: number
  description: string
  userId: number
  createdAt: string
  updatedAt: string
}

interface ItemsViewModel {
  id: number
  reference: string
  name: string
  amount: number
  description: string
  userId: number
}

export {
  ItemsModel,
  ItemsAddModels,
  ItemsViewModel
}
