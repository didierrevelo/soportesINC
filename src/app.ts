import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import { sequelize } from './config/postgres'
const PORT = process.env.PORT === undefined ? 3000 : process.env.PORT
const app = express()
app.use(cors())

app.use(router)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((err) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`No se conecto ${err}`)
  })

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
