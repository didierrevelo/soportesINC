/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/users'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/users [GET]
 */
router.get('/', getUsers)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/users [POST]
 */
// router.post('/', postUser)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/users/id [GET]
 */
router.get('/:id', getUser)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/users/id [PUT]
 */
router.put('/:id', updateUser)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/users/id [DELETE]
 */
router.delete('/:id', deleteUser)

export { router }
