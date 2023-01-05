import { Technicians, TechniciansAddModels } from '../models/technicians'
import { filtered, filteredASC, filteredDESC } from '../utils/filter.handle'

const insertTechnicians = async (technicians: TechniciansAddModels): Promise<any> => {
  const responseInsert = await Technicians.create(technicians)
  return responseInsert
}

const getTechniciansService = async (req: any): Promise<any> => {
  const technicians = await Technicians.findAll({})
  let TechniciansFiltered = technicians
  if (technicians.length > 0) {
    TechniciansFiltered = await filtered(req, technicians)
  }
  if (req.query.order === 'ASC') {
    TechniciansFiltered = await filteredASC(req, technicians)
  } else if (req.query.order === 'DESC') {
    TechniciansFiltered = await filteredDESC(req, technicians)
  }
  return TechniciansFiltered
}

const getTechnicianservice = async (req: any): Promise<any> => {
  const { id } = req.params
  const technicians = await Technicians.findByPk(id)
  return technicians
}

const updateTechniciansService = async (req: any): Promise<any> => {
  const { id } = req.params
  const { body } = req
  await Technicians.update(body, { where: { id } })
  const data = await Technicians.findByPk(id)
  return data
}

const deleteTechniciansService = async (req: any): Promise<any> => {
  const { id } = req.params
  return await Technicians.destroy({ where: { id } })
}

export { insertTechnicians, getTechniciansService, getTechnicianservice, updateTechniciansService, deleteTechniciansService }
