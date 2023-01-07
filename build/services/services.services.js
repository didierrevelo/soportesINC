"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServicesService = exports.updateServicesService = exports.getServiceService = exports.getServicesService = exports.insertServices = void 0;
const postgres_1 = require("../config/postgres");
const services_1 = require("../models/services");
const technicians_1 = require("../models/technicians");
const filter_handle_1 = require("../utils/filter.handle");
const insertServices = async (services, req) => {
    const { id, typeService, visitDay, done, comments } = services;
    const random = await technicians_1.Technicians.findAll({ order: postgres_1.sequelize.random(), limit: 1 });
    const responseInsert = await services_1.Services.create({
        id,
        typeService,
        visitDay,
        done,
        comments,
        technicianId: random[0].dataValues.id,
        userId: req.user.id
    });
    responseInsert.set('technicianId', random[0].dataValues.id, { raw: true });
    return responseInsert;
};
exports.insertServices = insertServices;
const getServicesService = async (req) => {
    const services = await (0, services_1.findAllData)();
    let ServicesFiltered = services;
    if (services.length > 0) {
        ServicesFiltered = await (0, filter_handle_1.filtered)(req, services);
    }
    if (req.query.order === 'ASC') {
        ServicesFiltered = await (0, filter_handle_1.filteredASC)(req, services);
    }
    else if (req.query.order === 'DESC') {
        ServicesFiltered = await (0, filter_handle_1.filteredDESC)(req, services);
    }
    return ServicesFiltered;
};
exports.getServicesService = getServicesService;
const getServiceService = async (req) => {
    const { id } = req.params;
    const services = await (0, services_1.findOneData)(id);
    return services;
};
exports.getServiceService = getServiceService;
const updateServicesService = async (req) => {
    const { id } = req.params;
    const { body } = req;
    await services_1.Services.update(body, { where: { id } });
    const data = await (0, services_1.findOneData)(id);
    return data;
};
exports.updateServicesService = updateServicesService;
const deleteServicesService = async (req) => {
    const { id } = req.params;
    return await services_1.Services.destroy({ where: { id } });
};
exports.deleteServicesService = deleteServicesService;
