"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRol = void 0;
const error_handle_1 = require("../utils/error.handle");
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolByUser = user.role;
        const checkValueRol = roles.some((rolSingle) => rolByUser.includes(rolSingle));
        if (!checkValueRol) {
            (0, error_handle_1.handleHttp)(res, 'USER_NOT_HAVE_PERMISSION', 403);
            return;
        }
        next();
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_PERMISSION_DENIED', 403);
    }
};
exports.checkRol = checkRol;
