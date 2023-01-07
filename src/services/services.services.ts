import { sequelize } from '../config/postgres'
import { Services, ServicesAddModels, findAllData, findOneData } from '../models/services'
import { Technicians } from '../models/technicians'
import { filtered, filteredASC, filteredDESC } from '../utils/filter.handle'

const insertServices = async (services: ServicesAddModels, req: any): Promise<any> => {
  const {
    id,
    typeService,
    visitDay,
    done,
    comments
  } = services
  const random = await Technicians.findAll({ order: sequelize.random(), limit: 1 })
  const responseInsert = await Services.create({
    id,
    typeService,
    visitDay,
    done,
    comments,
    technicianId: random[0].dataValues.id,
    userId: req.user.id
  })
  responseInsert.set('technicianId', random[0].dataValues.id, { raw: true })
  return responseInsert
}

const getServicesService = async (req: any): Promise<any> => {
  const services = await findAllData()
  let ServicesFiltered = services
  if (services.length > 0) {
    ServicesFiltered = await filtered(req, services)
  }
  if (req.query.order === 'ASC') {
    ServicesFiltered = await filteredASC(req, services)
  } else if (req.query.order === 'DESC') {
    ServicesFiltered = await filteredDESC(req, services)
  }
  return ServicesFiltered
}

const getServiceService = async (req: any): Promise<any> => {
  const { id } = req.params
  const services = await findOneData(id)
  return services
}

const updateServicesService = async (req: any): Promise<any> => {
  const { id } = req.params
  const { body } = req
  await Services.update(body, { where: { id } })
  const data = await findOneData(id)
  return data
}

const deleteServicesService = async (req: any): Promise<any> => {
  const { id } = req.params
  return await Services.destroy({ where: { id } })
}

export { insertServices, getServicesService, getServiceService, updateServicesService, deleteServicesService }
