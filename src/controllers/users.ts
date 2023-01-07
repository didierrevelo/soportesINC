import { Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  getUsersService,
  getUserService,
  updateUserService,
  deleteUserService
} from '../services/user.services'

const getUser = async (req: any, res: Response): Promise<any> => {
  try {
    const user = await getUserService(req)
    const data = (user != null) ? user : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_USER', error)
  }
}

const getUsers = async (req: any, res: Response): Promise<any> => {
  try {
    const userFiltered = await getUsersService(req)
    const data = (userFiltered.length !== 0) ? userFiltered : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_USERS', error)
  }
}

const updateUser = async (req: any, res: Response): Promise<any> => {
  try {
    const data = await updateUserService(req)
    const dataUpdate = (data != null) ? data : 'NOT_FOUND'
    res.status(200).json(dataUpdate)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_USER', error)
  }
}

const deleteUser = async (req: any, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    await deleteUserService(req)
    res.send(`Service with id ${Number(id)} was deleted`)
    res.status(204)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_USER', error)
  }
}

export {
  getUser,
  getUsers,
  updateUser,
  deleteUser
}
