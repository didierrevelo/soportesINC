"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorLogin = exports.validatorRegister = void 0;
const handleValidator_1 = require("../utils/handleValidator");
const express_validator_1 = require("express-validator");
const validatorRegister = [
    (0, express_validator_1.check)('fullName')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 })
        .withMessage('FullName is required'),
    (0, express_validator_1.check)('documentNumber')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 12 })
        .withMessage('documentNumber is required'),
    (0, express_validator_1.check)('email')
        .exists()
        .notEmpty()
        .isEmail()
        .withMessage('Email is required'),
    (0, express_validator_1.check)('cellPhone')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 12 })
        .withMessage('Cell phone is required'),
    (0, express_validator_1.check)('address')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 })
        .withMessage('Address is required'),
    (0, express_validator_1.check)('password')
        .exists()
        .notEmpty()
        .isLength({ min: 6, max: 16 })
        .withMessage('Password is required'),
    (req, res, next) => {
        return (0, handleValidator_1.validateResults)(req, res, next);
    }
];
exports.validatorRegister = validatorRegister;
const validatorLogin = [
    (0, express_validator_1.check)('email')
        .exists()
        .notEmpty()
        .isEmail()
        .withMessage('Email is required'),
    (0, express_validator_1.check)('password')
        .exists()
        .notEmpty()
        .isLength({ min: 6, max: 16 })
        .withMessage('Password is required'),
    (req, res, next) => {
        return (0, handleValidator_1.validateResults)(req, res, next);
    }
];
exports.validatorLogin = validatorLogin;
