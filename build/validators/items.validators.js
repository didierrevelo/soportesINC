"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorItems = void 0;
const handleValidator_1 = require("../utils/handleValidator");
const express_validator_1 = require("express-validator");
const validatorItems = [
    (0, express_validator_1.check)('references')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 })
        .withMessage('References is required'),
    (0, express_validator_1.check)('name')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 12 })
        .withMessage('Name is required'),
    (0, express_validator_1.check)('amount')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 12 })
        .withMessage('Amount is required'),
    (0, express_validator_1.check)('description')
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 })
        .withMessage('Description is required'),
    (req, res, next) => {
        return (0, handleValidator_1.validateResults)(req, res, next);
    }
];
exports.validatorItems = validatorItems;
