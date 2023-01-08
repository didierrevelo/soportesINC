import { Response } from 'express'

const handleHttp = (res: Response, error: string, errorRaw?: any): any => {
  res.send({ error, errorRaw })
}

export { handleHttp }
