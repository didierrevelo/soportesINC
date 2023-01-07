"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const auth_validator_1 = require("../validators/auth.validator");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/registerTech [POST]
 */
router.post('/registerTech', auth_validator_1.validatorRegister, auth_1.RegisterTechnician);
/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/loginTech [POST]
 */
router.post('/loginTech', auth_validator_1.validatorLogin, auth_1.TechLoginCtrol);
/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/auth/registerUser [POST]
 */
router.post('/registerUser', auth_validator_1.validatorRegister, auth_1.registerUser);
/**
 * Creating a route for the`POST` method.
 * http://localhost:3001/auth/loginUser [POST]
 */
router.post('/loginUser', auth_validator_1.validatorLogin, auth_1.userLoginCtrol);
