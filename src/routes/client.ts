import { Router } from 'express'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/client [GET]
 */
router.get('/', (_req, res) => {
  res.send({ data: 'Here put the models' })
})

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/client [POST]
 */
router.post('/', (_req, res) => {
  res.send({ data: 'Post client' })
})

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/client/id [GET]
 */
router.get('/:id', (_req, res) => {
  res.send({ data: 'Get for id client' })
})

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/client/id [PUT]
 */
router.put('/:id', (_req, res) => {
  res.send({ data: 'Put for id client' })
})

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/client/id [DELETE]
 */
router.delete('/:id', (_req, res) => {
  res.send({ data: 'delete for id client' })
})

export { router }
