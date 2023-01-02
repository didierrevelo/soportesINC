import { Router } from 'express'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services [GET]
 */
router.get('/', (_req, res) => {
  res.send({ data: 'Here put the models services' })
})

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/services [POST]
 */
router.post('/', (_req, res) => {
  res.send({ data: 'Post services' })
})

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services/id [GET]
 */
router.get('/:id', (_req, res) => {
  res.send({ data: 'Get for id services' })
})

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/services/id [PUT]
 */
router.put('/:id', (_req, res) => {
  res.send({ data: 'Put for id services' })
})

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/services/id [DELETE]
 */
router.delete('/:id', (_req, res) => {
  res.send({ data: 'delete for id services' })
})

export { router }
