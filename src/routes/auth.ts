/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  RegisterTechnician,
  registerUser,
  TechLoginCtrol,
  userLoginCtrol
} from '../controllers/auth'
import { validatorLogin, validatorRegister } from '../validators/auth.validator'

const router = Router()

/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/registerTech [POST]
 */
router.post('/registerTech', validatorRegister, RegisterTechnician)

/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/loginTech [POST]
 */
router.post('/loginTech', validatorLogin, TechLoginCtrol)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/auth/registerUser [POST]
 */
router.post('/registerUser', validatorRegister, registerUser)

/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/loginUser [POST]
 */
router.post('/loginUser', validatorLogin, userLoginCtrol)

export { router }
