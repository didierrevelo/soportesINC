import * as Sequelize from 'sequelize'

export type typeService = 'instalacion' | 'matenimiento' | 'reparacion'

interface TechniciansAddModels {
  id: number
  fullName: string
  documentNumber: number
  email: string
  cellPhone: number
  address: string
  password: string
  role: string
}
interface TechniciansModel extends Sequelize.Model<TechniciansModel, TechniciansAddModels> {
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

interface TechniciansViewModel {
  id: number
  fullName: string
  documentNumber: number
  email: string
  cellPhone: number
  address: string
  password: string
  role: string
}

export {
  TechniciansModel,
  TechniciansAddModels,
  TechniciansViewModel
}
