import { Response } from 'express'

const handleHttp = (res: Response, error: string, errorRaw?: any): any => {
  res.status(500)
  res.send({ error, errorRaw })
}

export { handleHttp }
