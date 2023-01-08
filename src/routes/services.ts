/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteService, getService, getServices, postService, updateService } from '../controllers/services'
import { checkJwt } from '../middleware/session'
import { checkRol } from '../middleware/rolUser'
import { validatorServices } from '../validators/services.validators'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services [GET]
 */
router.get('/', checkJwt, checkRol(['admin', 'tech']), getServices)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/services [POST]
 */
router.post('/create', checkJwt, validatorServices, postService)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services/id [GET]
 */
router.get('/:id', checkJwt, getService)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/services/id [PUT]
 */
router.put('/put/:id', checkJwt, validatorServices, checkRol(['admin', 'tech']), updateService)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/services/id [DELETE]
 */
router.delete('/delete/:id', checkJwt, checkRol(['admin', 'tech']), deleteService)

export { router }
