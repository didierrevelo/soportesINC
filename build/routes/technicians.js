"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const technicians_1 = require("../controllers/technicians");
const session_1 = require("../middleware/session");
const rolUser_1 = require("../middleware/rolUser");
const auth_validator_1 = require("../validators/auth.validator");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/service [GET]
 */
router.get('/', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin', 'tech']), technicians_1.getTechnicians);
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/service/id [GET]
 */
router.get('/:id', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin', 'tech']), technicians_1.getTechnician);
/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/service/id [PUT]
 */
router.put('/:id', session_1.checkJwt, auth_validator_1.validatorRegister, (0, rolUser_1.checkRol)(['admin']), technicians_1.updateTechnician);
/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/service/id [DELETE]
 */
router.delete('/:id', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin']), technicians_1.deleteTechnician);
