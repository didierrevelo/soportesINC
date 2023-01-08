/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items'
import { checkJwt } from '../middleware/session'
import { checkRol } from '../middleware/rolUser'
import { validatorItems } from '../validators/items.validators'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/soporteinc/item [GET]
 */
router.get('/', checkJwt, getItems)

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/soporteinc/item [POST]
 */
router.post('/create', checkJwt, validatorItems, checkRol(['admin', 'tech']), postItem)

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/soporteinc/item/id [GET]
 */
router.get('/:id', checkJwt, getItem)

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/soporteinc/item/id [PUT]
 */
router.put('/put/:id', checkJwt, validatorItems, checkRol(['admin', 'tech']), updateItem)

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/soporteinc/item/id [DELETE]
 */
router.delete('/delete/:id', checkJwt, checkRol(['admin', 'tech']), deleteItem)

export { router }
