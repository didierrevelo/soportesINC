import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { handleHttp } from './error.handle'

const validateResults = (req: Request, res: Response, next: NextFunction): void => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    res.status(403)
    handleHttp(res, 'HANDLE_VALIDATION_ERROR', err)
  }
}

export { validateResults }
