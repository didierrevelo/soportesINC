import { Response, Request } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertItem, getItemsService, getItemService, updateItemService, deleteItemService } from '../services/items.services'

const getItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const item = await getItemService(req)
    const data = (item != null) ? item : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}

const getItems = async (req: any, res: Response): Promise<any> => {
  try {
    const ItemsFiltered = await getItemsService(req)
    const data = (ItemsFiltered.length !== 0) ? ItemsFiltered : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
  }
}

const updateItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const update = await updateItemService(req)
    const data = (update != null) ? update : 'NOT_FOUND'
    res.status(200).json(data)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', error)
  }
}

const postItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const newItem = await insertItem(req.body, req)
    res.status(201).json(newItem)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

const deleteItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    await deleteItemService(req)
    res.send(`Item with id ${Number(id)} was deleted`)
    res.status(204)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM', error)
  }
}

export {
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem
}
