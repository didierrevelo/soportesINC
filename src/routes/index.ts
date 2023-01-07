import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const clearFileName = (fileName: any): string => {
  const file = fileName.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = clearFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      // console.log(`${cleanName}`)
      router.use(`/${cleanName}/soportesinc`, moduleRouter.router)
    }).catch((e) => {
      console.error(e.message)
    })
  }
  return null
})

export { router }
