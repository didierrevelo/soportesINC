import {
  Item,
  ItemsAddModels,
  findAllData,
  findOneData
} from '../models/items'
import { filtered, filteredASC, filteredDESC } from '../utils/filter.handle'

const insertItem = async (items: ItemsAddModels, req: any): Promise<any> => {
  const {
    id,
    reference,
    name,
    amount,
    description
  } = items
  const responseInsert = await Item.create({
    id,
    reference,
    name,
    amount,
    description,
    userId: req.user.id
  })
  return responseInsert
}

const getItemsService = async (req: any): Promise<any> => {
  const item = await findAllData()
  let ItemsFiltered = item
  if (item.length > 0) {
    ItemsFiltered = await filtered(req, item)
  }
  if (req.query.order === 'ASC') {
    ItemsFiltered = await filteredASC(req, item)
  } else if (req.query.order === 'DESC') {
    ItemsFiltered = await filteredDESC(req, item)
  }
  return ItemsFiltered
}

const getItemService = async (req: any): Promise<any> => {
  const { id } = req.params
  const item = await findOneData(id)
  return item
}

const updateItemService = async (req: any): Promise<any> => {
  const { id } = req.params
  const { body } = req
  await Item.update(body, { where: { id } })
  const data = await Item.findByPk(id)
  return data
}

const deleteItemService = async (req: any): Promise<any> => {
  const { id } = req.params
  return await Item.destroy({ where: { id } })
}

export { insertItem, getItemsService, getItemService, updateItemService, deleteItemService }
