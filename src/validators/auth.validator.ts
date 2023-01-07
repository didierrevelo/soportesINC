import { NextFunction } from 'express'
import { validateResults } from '../utils/handleValidator'
import { check } from 'express-validator'

const validatorRegister = [
  check('fullName')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 })
    .withMessage('FullName is required'),
  check('documentNumber')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 12 })
    .withMessage('documentNumber is required'),
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('Email is required'),
  check('cellPhone')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 12 })
    .withMessage('Cell phone is required'),
  check('address')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 })
    .withMessage('Address is required'),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 6, max: 16 })
    .withMessage('Password is required'),
  (req: any, res: any, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

const validatorLogin = [
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('Email is required'),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 6, max: 16 })
    .withMessage('Password is required'),
  (req: any, res: any, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export {
  validatorRegister,
  validatorLogin
}
