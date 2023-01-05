import { Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertTechnicians } from '../services/tehcnicians.services'
import { insertUser } from '../services/user.services'

const RegisterTechnician = async (req: any, res: Response): Promise<any> => {
  try {
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

// const TechLoginCtrol = async (req: any, res: Response): Promise<any> => {

// }

// const userLoginCtrol = async (req: any, res: Response): Promise<any> => {

// }

export {
  RegisterTechnician,
  registerUser
  // TechLoginCtrol,
  // userLoginCtrol
}
