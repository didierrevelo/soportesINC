import { Router } from 'express'

const router = Router()

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/technicians [GET]
 */
router.get('/', (_req, res) => {
  res.send({ data: 'Here put the models' })
})

/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/technicians [POST]
 */
router.post('/', (_req, res) => {
  res.send({ data: 'Post technicians' })
})

/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/technicians/id [GET]
 */
router.get('/:id', (_req, res) => {
  res.send({ data: 'Get for id technicians' })
})

/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/technicians/id [PUT]
 */
router.put('/:id', (_req, res) => {
  res.send({ data: 'Put for id technicians' })
})

/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/technicians/id [DELETE]
 */
router.delete('/:id', (_req, res) => {
  res.send({ data: 'delete for id technicians' })
})

export { router }
