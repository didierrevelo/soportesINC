import * as Sequelize from 'sequelize'

interface UsersAddModels {
  id: number
  fullName: string
  documentNumber: number
  email: string
  cellPhone: number
  address: string
  password: string
  role: string
}

interface UsersModel extends Sequelize.Model<UsersModel, UsersAddModels> {
  id: number
  fullName: string
  documentNumber: number
  email: string
  cellPhone: number
  address: string
  password: string
  role: string
  createdAt: string
  updatedAt: string
}

interface UsersViewModel {
  id: number
  fullName: string
  documentNumber: number
  email: string
  cellPhone: number
  address: string
  password: string
}

export {
  UsersModel,
  UsersAddModels,
  UsersViewModel
}
