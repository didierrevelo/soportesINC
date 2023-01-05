/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteService, getService, getServices, postService, updateService } from '../controllers/services'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services [GET]
 */
router.get('/', getServices)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/services [POST]
 */
router.post('/', postService)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services/id [GET]
 */
router.get('/:id', getService)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/services/id [PUT]
 */
router.put('/:id', updateService)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/services/id [DELETE]
 */
router.delete('/:id', deleteService)

export { router }
