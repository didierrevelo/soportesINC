import { Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertServices, getServiceService, getServicesService, updateServicesService, deleteServicesService } from '../services/services.services'

const getService = async (req: any, res: Response): Promise<any> => {
  try {
    const service = await getServiceService(req)
    const data = (service != null) ? service : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_Service', error)
  }
}

const getServices = async (req: any, res: Response): Promise<any> => {
  try {
    const ServicesFiltered = await getServicesService(req)
    const data = (ServicesFiltered.length !== 0) ? ServicesFiltered : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_Services', error)
  }
}

const updateService = async (req: any, res: Response): Promise<any> => {
  try {
    const data = await updateServicesService(req)
    const dataUpdate = (data != null) ? data : 'NOT_FOUND'
    res.status(200).json(dataUpdate)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_Service', error)
  }
}

const postService = async (req: any, res: Response): Promise<any> => {
  try {
    const newService = await insertServices(req.body, req)
    res.status(201).json(newService)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_SERVICE', error)
  }
}

const deleteService = async (req: any, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    await deleteServicesService(req)
    res.send(`Service with id ${Number(id)} was deleted`)
    res.status(204)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_Service', error)
  }
}

export {
  getService,
  getServices,
  updateService,
  postService,
  deleteService
}
