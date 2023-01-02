import { Router } from 'express'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item [GET]
 */
router.get('/', (_req, res) => {
  res.send({ data: 'Here put the models item' })
})

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/item [POST]
 */
router.post('/', (_req, res) => {
  res.send({ data: 'Post item' })
})

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item/id [GET]
 */
router.get('/:id', (_req, res) => {
  res.send({ data: 'Get for id item' })
})

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/item/id [PUT]
 */
router.put('/:id', (_req, res) => {
  res.send({ data: 'Put for id item' })
})

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/item/id [DELETE]
 */
router.delete('/:id', (_req, res) => {
  res.send({ data: 'delete for id item' })
})

export { router }
