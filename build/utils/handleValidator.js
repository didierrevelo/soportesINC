"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResults = void 0;
const express_validator_1 = require("express-validator");
const error_handle_1 = require("./error.handle");
const validateResults = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        res.status(403);
        (0, error_handle_1.handleHttp)(res, 'HANDLE_VALIDATION_ERROR', err);
    }
};
exports.validateResults = validateResults;
