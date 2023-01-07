import { Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertTechnicians, insertUser, loginTechnician, loginUser } from '../services/auth.services'

const RegisterTechnician = async (req: any, res: Response): Promise<any> => {
  try {
    console.log(req.body)
    const newTechnicain = await insertTechnicians(req.body)
    res.status(201).json(newTechnicain)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_TECHNICIAN', error)
  }
}

const registerUser = async (req: any, res: Response): Promise<any> => {
  try {
    const newUser = await insertUser(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_USER', error)
  }
}

const TechLoginCtrol = async (req: any, res: Response): Promise<any> => {
  const { email, password } = req.body
  const responseUser = await loginTechnician({ email, password })
  if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403)
    res.send(responseUser)
  } else {
    res.send(responseUser)
  }
}

const userLoginCtrol = async (req: any, res: Response): Promise<any> => {
  const { email, password } = req.body
  const responseUser = await loginUser({ email, password })
  if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403)
    res.send(responseUser)
  } else {
    res.send(responseUser)
  }
}

export {
  RegisterTechnician,
  registerUser,
  TechLoginCtrol,
  userLoginCtrol
}
