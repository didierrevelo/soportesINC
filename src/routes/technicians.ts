/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteTechnician, getTechnician, getTechnicians, updateTechnician } from '../controllers/technicians'
import { checkJwt } from '../middleware/session'
import { checkRol } from '../middleware/rolUser'
import { validatorRegister } from '../validators/auth.validator'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/service [GET]
 */
router.get('/', checkJwt, checkRol(['admin', 'tech']), getTechnicians)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/service/id [GET]
 */
router.get('/:id', checkJwt, checkRol(['admin', 'tech']), getTechnician)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/service/id [PUT]
 */
router.put('/put/:id', checkJwt, validatorRegister, checkRol(['admin']), updateTechnician)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/service/id [DELETE]
 */
router.delete('/delete/:id', checkJwt, checkRol(['admin']), deleteTechnician)

export { router }
