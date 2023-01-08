/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/users'
import { checkJwt } from '../middleware/session'
import { checkRol } from '../middleware/rolUser'
import { validatorRegister } from '../validators/auth.validator'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/users [GET]
 */
router.get('/', checkJwt, checkRol(['admin']), getUsers)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/users/id [GET]
 */
router.get('/:id', checkJwt, getUser)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/users/id [PUT]
 */
router.put('/put/:id', checkJwt, validatorRegister, checkRol(['admin']), updateUser)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/users/id [DELETE]
 */
router.delete('/delete/:id', checkJwt, checkRol(['admin']), deleteUser)

export { router }
