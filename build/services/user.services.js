"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.getUserService = exports.getUsersService = void 0;
const user_1 = require("../models/user");
const filter_handle_1 = require("../utils/filter.handle");
const getUsersService = async (req) => {
    const user = await (0, user_1.findAllData)();
    let UserFiltered = user;
    if (user.length > 0) {
        UserFiltered = await (0, filter_handle_1.filtered)(req, user);
    }
    if (req.query.order === 'ASC') {
        UserFiltered = await (0, filter_handle_1.filteredASC)(req, user);
    }
    else if (req.query.order === 'DESC') {
        UserFiltered = await (0, filter_handle_1.filteredDESC)(req, user);
    }
    return UserFiltered;
};
exports.getUsersService = getUsersService;
const getUserService = async (req) => {
    const { id } = req.params;
    const user = await (0, user_1.findOneData)(id);
    return user;
};
exports.getUserService = getUserService;
const updateUserService = async (req) => {
    const { id } = req.params;
    const { body } = req;
    await user_1.Users.update(body, { where: { id } });
    const data = await user_1.Users.findByPk(id);
    return data;
};
exports.updateUserService = updateUserService;
const deleteUserService = async (req) => {
    const { id } = req.params;
    return await user_1.Users.destroy({ where: { id } });
};
exports.deleteUserService = deleteUserService;
