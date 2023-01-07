"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const error_handle_1 = require("../utils/error.handle");
const user_1 = require("../models/user");
const checkJwt = async (req, res, next) => {
    try {
        if (req.headers.authorization === null) {
            (0, error_handle_1.handleHttp)(res, 'UNAUTHORIZED', 401);
            return;
        }
        const jwtByUser = req.headers.authorization;
        const jwt = jwtByUser?.split(' ').pop();
        const verifiedToken = await (0, jwt_handle_1.verifyToken)(jwt);
        if (verifiedToken === null) {
            (0, error_handle_1.handleHttp)(res, 'NOT_PAYLOAD_DATA', 401);
            return;
        }
        const user = await user_1.Users.findOne({
            where: { email: verifiedToken.email }
        });
        if (verifiedToken !== null) {
            req.user = user;
            next();
        }
        else {
            res.status(401).json({
                message: 'Unauthorized'
            });
        }
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'LOGIN_REQUIRED', 401);
    }
};
exports.checkJwt = checkJwt;
