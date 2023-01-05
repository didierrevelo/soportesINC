/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items'
import { logMiddleware } from '../middleware/log'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item [GET]
 */
router.get('/', logMiddleware, getItems)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/item [POST]
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', postItem)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item/id [GET]
 */
router.get('/:id', getItem)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/item/id [PUT]
 */
router.put('/:id', updateItem)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/item/id [DELETE]
 */
router.delete('/:id', deleteItem)

export { router }
