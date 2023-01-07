import * as Sequelize from 'sequelize'

export type typeService = 'instalacion' | 'matenimiento' | 'reparacion'

interface ServicesAddModels {
  id: number
  typeService: typeService
  visitDay: Date
  done: boolean
  comments: string
  technicianId: number
  userId: number
}

interface ServicesModel extends Sequelize.Model<ServicesModel, ServicesAddModels> {
  id: number
  typeService: typeService
  visitDay: Date
  done: boolean
  comments: string
  technicianId: number
  userId: number
  createdAt: string
  updatedAt: string
}

interface ServicesViewModel {
  id: number
  typeService: typeService
  visitDay: Date
  done: boolean
  comments: string
  technicianId: number
  userId: number
}

export {
  ServicesModel,
  ServicesAddModels,
  ServicesViewModel
}
