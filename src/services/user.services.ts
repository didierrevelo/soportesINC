import { Users, findAllData, findOneData } from '../models/user'
import { filtered, filteredASC, filteredDESC } from '../utils/filter.handle'

const getUsersService = async (req: any): Promise<any> => {
  const user = await findAllData()
  let UserFiltered = user
  if (user.length > 0) {
    UserFiltered = await filtered(req, user)
  }
  if (req.query.order === 'ASC') {
    UserFiltered = await filteredASC(req, user)
  } else if (req.query.order === 'DESC') {
    UserFiltered = await filteredDESC(req, user)
  }
  return UserFiltered
}

const getUserService = async (req: any): Promise<any> => {
  const { id } = req.params
  const user = await findOneData(id)
  return user
}

const updateUserService = async (req: any): Promise<any> => {
  const { id } = req.params
  const { body } = req
  await Users.update(body, { where: { id } })
  const data = await Users.findByPk(id)
  return data
}

const deleteUserService = async (req: any): Promise<any> => {
  const { id } = req.params
  return await Users.destroy({ where: { id } })
}

export { getUsersService, getUserService, updateUserService, deleteUserService }
