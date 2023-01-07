"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorServices = void 0;
const handleValidator_1 = require("../utils/handleValidator");
const express_validator_1 = require("express-validator");
const validatorServices = [
    (0, express_validator_1.check)('typeService')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 15 })
        .withMessage('typeService is required you should between instalacion, matenimiento, reparacion'),
    (0, express_validator_1.check)('visitDay')
        .exists()
        .notEmpty()
        .isDate({
        format: 'YYYY-MM-DD'
    })
        .isLength({ min: 3, max: 18 })
        .withMessage('visitDay is required format: YYYY-MM-DD'),
    (0, express_validator_1.check)('comments')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 })
        .withMessage('comments is required'),
    (req, res, next) => {
        return (0, handleValidator_1.validateResults)(req, res, next);
    }
];
exports.validatorServices = validatorServices;
