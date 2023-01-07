"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTechnicians = exports.insertUser = exports.loginUser = exports.loginTechnician = void 0;
const technicians_1 = require("../models/technicians");
const user_1 = require("../models/user");
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const insertUser = async (user) => {
    const { id, fullName, documentNumber, email, cellPhone, address, password, role } = user;
    const checkIs = await user_1.Users.findOne({ where: { email } });
    if (checkIs !== null)
        return 'ALREADY_USER';
    const passHash = await (0, bcrypt_handle_1.encrypt)(password);
    const responseInsert = await user_1.Users.create({
        id,
        fullName,
        documentNumber,
        email,
        cellPhone,
        address,
        password: passHash,
        role
    });
    responseInsert.set('password', 'secret', { raw: true });
    return responseInsert;
};
exports.insertUser = insertUser;
const insertTechnicians = async (technicians) => {
    const { id, fullName, documentNumber, email, cellPhone, address, password, role } = technicians;
    const checkIs = await technicians_1.Technicians.findOne({ where: { email } });
    if (checkIs !== null)
        return 'ALREADY_TECHNICIAN';
    const passHash = await (0, bcrypt_handle_1.encrypt)(password);
    const responseInsert = await technicians_1.Technicians.create({
        id,
        fullName,
        documentNumber,
        email,
        cellPhone,
        address,
        password: passHash,
        role
    });
    responseInsert.set('password', 'secret', { raw: true });
    return responseInsert;
};
exports.insertTechnicians = insertTechnicians;
const loginUser = async (auth) => {
    const { email, password } = auth;
    const checkIs = await user_1.Users.findOne({ where: { email } });
    if (checkIs === null) {
        return 'NOT_FOUND_USER';
    }
    const passwordHash = checkIs.dataValues.password;
    const isCorrect = await (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (isCorrect === false) {
        return 'PASSWORD_INCORRECT';
    }
    const token = (0, jwt_handle_1.generateToken)(checkIs.email);
    const data = {
        token,
        user: checkIs?.set('password', 'secret', { raw: true })
    };
    return data;
};
exports.loginUser = loginUser;
const loginTechnician = async (auth) => {
    const { email, password } = auth;
    const checkIs = await technicians_1.Technicians.findOne({ where: { email } });
    if (checkIs === null) {
        return 'NOT_FOUND_USER';
    }
    const passwordHash = checkIs.dataValues.password;
    const isCorrect = await (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (isCorrect === false) {
        return 'PASSWORD_INCORRECT';
    }
    const token = (0, jwt_handle_1.generateToken)(checkIs.email);
    const data = {
        token,
        user: checkIs?.set('password', 'secret', { raw: true })
    };
    return data;
};
exports.loginTechnician = loginTechnician;
