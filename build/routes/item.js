"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const items_1 = require("../controllers/items");
const session_1 = require("../middleware/session");
const rolUser_1 = require("../middleware/rolUser");
const items_validators_1 = require("../validators/items.validators");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item [GET]
 */
router.get('/', session_1.checkJwt, items_1.getItems);
/**
 * Creating a route for the `POST` method.
 * http://localhost:3001/item [POST]
 */
router.post('/', session_1.checkJwt, items_validators_1.validatorItems, (0, rolUser_1.checkRol)(['admin', 'tech']), items_1.postItem);
/**
 * Creating a route for the `GET` method.
 * http://localhost:3001/item/id [GET]
 */
router.get('/:id', session_1.checkJwt, items_1.getItem);
/**
 * Creating a route for the `PUT` method.
 * http://localhost:3001/item/id [PUT]
 */
router.put('/:id', session_1.checkJwt, items_validators_1.validatorItems, (0, rolUser_1.checkRol)(['admin', 'tech']), items_1.updateItem);
/**
 * Creating a route for the `DELETE` method.
 * http://localhost:3001/item/id [DELETE]
 */
router.delete('/:id', session_1.checkJwt, (0, rolUser_1.checkRol)(['admin', 'tech']), items_1.deleteItem);
