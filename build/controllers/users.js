"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.getUser = void 0;
const error_handle_1 = require("../utils/error.handle");
const user_services_1 = require("../services/user.services");
const getUser = async (req, res) => {
    try {
        const user = await (0, user_services_1.getUserService)(req);
        const data = (user != null) ? user : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_USER', error);
    }
};
exports.getUser = getUser;
const getUsers = async (req, res) => {
    try {
        const userFiltered = await (0, user_services_1.getUsersService)(req);
        const data = (userFiltered.length !== 0) ? userFiltered : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_USERS', error);
    }
};
exports.getUsers = getUsers;
const updateUser = async (req, res) => {
    try {
        const data = await (0, user_services_1.updateUserService)(req);
        const dataUpdate = (data != null) ? data : 'NOT_FOUND';
        res.status(200).json(dataUpdate);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_USER', error);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, user_services_1.deleteUserService)(req);
        res.send(`Service with id ${Number(id)} was deleted`);
        res.status(204);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_USER', error);
    }
};
exports.deleteUser = deleteUser;
