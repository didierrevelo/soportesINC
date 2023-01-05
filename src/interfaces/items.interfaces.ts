import * as Sequelize from 'sequelize'

interface ItemsAddModels {
  id: number
  reference: string
  name: string
  amount: number
  description: string
}
interface ItemsModel extends Sequelize.Model<ItemsModel, ItemsAddModels> {
  id: number
  reference: string
  name: string
  amount: number
  description: string
  createdAt: string
  updatedAt: string
}

interface ItemsViewModel {
  id: number
  reference: string
  name: string
  amount: number
  description: string
}

export {
  ItemsModel,
  ItemsAddModels,
  ItemsViewModel
}
