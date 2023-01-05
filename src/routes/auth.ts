/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  RegisterTechnician,
  registerUser
  // ,
  // TechLoginCtrol,
  // userLoginCtrol
} from '../controllers/auth'

const router = Router()

/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/registerTech [POST]
 */
router.post('/registerTech', RegisterTechnician)

/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/loginTech [POST]
 */
// router.post('/loginTech', TechLoginCtrol)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/auth/registerUser [POST]
 */
router.post('/registerUser', registerUser)

/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/userTech [POST]
 */
// router.post('/userTech', userLoginCtrol)

export { router }
