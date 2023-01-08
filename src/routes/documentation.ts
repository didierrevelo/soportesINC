import swaggerUI from 'swagger-ui-express'
import { Router } from 'express'
import { openApiConfig } from '../docs/swagger'

const router = Router()
/**
 * Documentation route for swagger
 */
router.use('/', swaggerUI.serve, swaggerUI.setup(openApiConfig))

export { router }
