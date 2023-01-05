import { NextFunction, Request, Response } from 'express'

const logMiddleware = async (req: Request, _res: Response, next: NextFunction): Promise<any> => {
  const header = req.headers
  console.log(header)
  const userAgent = header['user-agent']
  console.log('userAgent', userAgent)
  next()
}

export { logMiddleware }
