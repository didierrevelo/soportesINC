"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginCtrol = exports.TechLoginCtrol = exports.registerUser = exports.RegisterTechnician = void 0;
const error_handle_1 = require("../utils/error.handle");
const auth_services_1 = require("../services/auth.services");
const RegisterTechnician = async (req, res) => {
    try {
        console.log(req.body);
        const newTechnicain = await (0, auth_services_1.insertTechnicians)(req.body);
        res.status(201).json(newTechnicain);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_TECHNICIAN', error);
    }
};
exports.RegisterTechnician = RegisterTechnician;
const registerUser = async (req, res) => {
    try {
        const newUser = await (0, auth_services_1.insertUser)(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_USER', error);
    }
};
exports.registerUser = registerUser;
const TechLoginCtrol = async (req, res) => {
    const { email, password } = req.body;
    const responseUser = await (0, auth_services_1.loginTechnician)({ email, password });
    if (responseUser === 'PASSWORD_INCORRECT') {
        res.status(403);
        res.send(responseUser);
    }
    else {
        res.send(responseUser);
    }
};
exports.TechLoginCtrol = TechLoginCtrol;
const userLoginCtrol = async (req, res) => {
    const { email, password } = req.body;
    const responseUser = await (0, auth_services_1.loginUser)({ email, password });
    if (responseUser === 'PASSWORD_INCORRECT') {
        res.status(403);
        res.send(responseUser);
    }
    else {
        res.send(responseUser);
    }
};
exports.userLoginCtrol = userLoginCtrol;
