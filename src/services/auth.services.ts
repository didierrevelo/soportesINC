import { Auth } from '../interfaces/auth.interface'
import { Technicians, TechniciansAddModels } from '../models/technicians'
import { Users, UsersAddModels } from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const insertUser = async (user: UsersAddModels): Promise<any> => {
  const {
    id,
    fullName,
    documentNumber,
    email,
    cellPhone,
    address,
    password,
    role
  } = user
  const checkIs = await Users.findOne({ where: { email } })
  if (checkIs !== null) return 'ALREADY_USER'
  const passHash = await encrypt(password)
  const responseInsert = await Users.create({
    id,
    fullName,
    documentNumber,
    email,
    cellPhone,
    address,
    password: passHash,
    role
  })
  responseInsert.set('password', 'secret', { raw: true })
  return responseInsert
}

const insertTechnicians = async (technicians: TechniciansAddModels): Promise<any> => {
  const {
    id,
    fullName,
    documentNumber,
    email,
    cellPhone,
    address,
    password,
    role
  } = technicians
  const checkIs = await Technicians.findOne({ where: { email } })
  if (checkIs !== null) return 'ALREADY_TECHNICIAN'
  const passHash = await encrypt(password)
  const responseInsert = await Technicians.create({
    id,
    fullName,
    documentNumber,
    email,
    cellPhone,
    address,
    password: passHash,
    role
  })
  responseInsert.set('password', 'secret', { raw: true })
  return responseInsert
}

const loginUser = async (auth: Auth): Promise<any> => {
  const {
    email,
    password
  } = auth
  const checkIs = await Users.findOne({ where: { email } })
  if (checkIs === null) {
    return 'NOT_FOUND_USER'
  }

  const passwordHash = checkIs.dataValues.password
  const isCorrect = await verified(password, passwordHash)
  if (isCorrect === false) {
    return 'PASSWORD_INCORRECT'
  }
  const token = generateToken(checkIs.email)
  const data = {
    token,
    user: checkIs?.set('password', 'secret', { raw: true })
  }
  return data
}

const loginTechnician = async (auth: Auth): Promise<any> => {
  const {
    email,
    password
  } = auth
  const checkIs = await Technicians.findOne({ where: { email } })
  if (checkIs === null) {
    return 'NOT_FOUND_USER'
  }

  const passwordHash = checkIs.dataValues.password
  const isCorrect = await verified(password, passwordHash)
  if (isCorrect === false) {
    return 'PASSWORD_INCORRECT'
  }
  const token = generateToken(checkIs.email)
  const data = {
    token,
    user: checkIs?.set('password', 'secret', { raw: true })
  }
  return data
}

export {
  loginTechnician,
  loginUser,
  insertUser,
  insertTechnicians
}
