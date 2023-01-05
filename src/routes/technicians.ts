/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteTechnician, getTechnician, getTechnicians, updateTechnician } from '../controllers/technicians'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/service [GET]
 */
router.get('/', getTechnicians)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/service [POST]
 */
// router.post('/', postTechnician)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/service/id [GET]
 */
router.get('/:id', getTechnician)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/service/id [PUT]
 */
router.put('/:id', updateTechnician)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/service/id [DELETE]
 */
router.delete('/:id', deleteTechnician)

export { router }
