"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = (process.env.JWT_SECRET != null) ? process.env.JWT_SECRET : 'ERROR_TOKEN';
const generateToken = (email) => {
    const jwt = (0, jsonwebtoken_1.sign)({ email }, JWT_SECRET, {
        expiresIn: '2h'
    });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = async (jwt) => {
    const isOk = await (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return isOk;
};
exports.verifyToken = verifyToken;
