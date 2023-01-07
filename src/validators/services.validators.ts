import { NextFunction } from 'express'
import { validateResults } from '../utils/handleValidator'
import { check } from 'express-validator'

const validatorServices = [
  check('typeService')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 })
    .withMessage('typeService is required you should between instalacion, matenimiento, reparacion'),
  check('visitDay')
    .exists()
    .notEmpty()
    .isDate({
      format: 'YYYY-MM-DD'
    })
    .isLength({ min: 3, max: 18 })
    .withMessage('visitDay is required format: YYYY-MM-DD'),
  check('comments')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 })
    .withMessage('comments is required'),
  (req: any, res: any, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export {
  validatorServices
}
