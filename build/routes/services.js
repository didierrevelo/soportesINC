"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const services_1 = require("../controllers/services");
const session_1 = require("../middleware/session");
const rolUser_1 = require("../middleware/rolUser");
const services_validators_1 = require("../validators/services.validators");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services [GET]
 */
router.get('/', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin', 'tech']), services_1.getServices);
/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/services [POST]
 */
router.post('/', session_1.checkJwt, services_validators_1.validatorServices, services_1.postService);
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/services/id [GET]
 */
router.get('/:id', session_1.checkJwt, services_1.getService);
/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/services/id [PUT]
 */
router.put('/:id', session_1.checkJwt, services_validators_1.validatorServices, (0, rolUser_1.checkRol)(['admin', 'tech']), services_1.updateService);
/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/services/id [DELETE]
 */
router.delete('/:id', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin', 'tech']), services_1.deleteService);
