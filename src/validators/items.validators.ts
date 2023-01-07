import { NextFunction } from 'express'
import { validateResults } from '../utils/handleValidator'
import { check } from 'express-validator'

const validatorItems = [
  check('references')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 })
    .withMessage('References is required'),
  check('name')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 12 })
    .withMessage('Name is required'),
  check('amount')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 12 })
    .withMessage('Amount is required'),
  check('description')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 })
    .withMessage('Description is required'),
  (req: any, res: any, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export {
  validatorItems
}
