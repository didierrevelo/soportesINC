import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import { dbAutenticate } from './config/postgres'

import './models/user'
import './models/services'
import './models/technicians'
import './models/items'

const PORT = process.env.PORT === undefined ? 3000 : process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

dbAutenticate()
  .then(() => {
    console.log('Connection has been established successfully')
  })
  .catch((err) => {
    console.error(err)
  })

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
