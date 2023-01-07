import { Technicians, findAllData, findOneData } from '../models/technicians'
import { filtered, filteredASC, filteredDESC } from '../utils/filter.handle'

const getTechniciansService = async (req: any): Promise<any> => {
  const technicians = await findAllData()
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
  const technicians = await findOneData(id)
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

export { getTechniciansService, getTechnicianservice, updateTechniciansService, deleteTechniciansService }
