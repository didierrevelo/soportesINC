import { Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  getTechniciansService,
  getTechnicianservice,
  updateTechniciansService,
  deleteTechniciansService
} from '../services/technicians.services'

const getTechnician = async (req: any, res: Response): Promise<any> => {
  try {
    const technician = await getTechnicianservice(req)
    const data = (technician != null) ? technician : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_TECHNICIAN', error)
  }
}

const getTechnicians = async (req: any, res: Response): Promise<any> => {
  try {
    const technicianFiltered = await getTechniciansService(req)
    const data = (technicianFiltered.length !== 0) ? technicianFiltered : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_TECHNICIANS', error)
  }
}

const updateTechnician = async (req: any, res: Response): Promise<any> => {
  try {
    const data = await updateTechniciansService(req)
    const dataUpdate = (data != null) ? data : 'NOT_FOUND'
    res.status(200).json(dataUpdate)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_TECHNICIAN', error)
  }
}

const deleteTechnician = async (req: any, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    await deleteTechniciansService(req)
    res.send(`Service with id ${Number(id)} was deleted`)
    res.status(204)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_TECHNICIAN', error)
  }
}

export {
  getTechnician,
  getTechnicians,
  updateTechnician,
  deleteTechnician
}
