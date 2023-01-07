"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const users_1 = require("../controllers/users");
const session_1 = require("../middleware/session");
const rolUser_1 = require("../middleware/rolUser");
const auth_validator_1 = require("../validators/auth.validator");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/users [GET]
 */
router.get('/', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin']), users_1.getUsers);
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/users/id [GET]
 */
router.get('/:id', session_1.checkJwt, users_1.getUser);
/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/users/id [PUT]
 */
router.put('/:id', session_1.checkJwt, auth_validator_1.validatorRegister, (0, rolUser_1.checkRol)(['admin']), users_1.updateUser);
/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/users/id [DELETE]
 */
router.delete('/:id', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin']), users_1.deleteUser);
