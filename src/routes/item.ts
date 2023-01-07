/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items'
import { checkJwt } from '../middleware/session'
import { checkRol } from '../middleware/rolUser'
import { validatorItems } from '../validators/items.validators'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item [GET]
 */
router.get('/', checkJwt, getItems)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/item [POST]
 */
router.post('/', checkJwt, validatorItems, checkRol(['admin', 'tech']), postItem)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item/id [GET]
 */
router.get('/:id', checkJwt, getItem)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/item/id [PUT]
 */
router.put('/:id', checkJwt, validatorItems, checkRol(['admin', 'tech']), updateItem)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/item/id [DELETE]
 */
router.delete('/:id', checkJwt, checkRol(['admin', 'tech']), deleteItem)

export { router }
