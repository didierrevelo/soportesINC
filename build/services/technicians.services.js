"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTechniciansService = exports.updateTechniciansService = exports.getTechnicianservice = exports.getTechniciansService = void 0;
const technicians_1 = require("../models/technicians");
const filter_handle_1 = require("../utils/filter.handle");
const getTechniciansService = async (req) => {
    const technicians = await (0, technicians_1.findAllData)();
    let TechniciansFiltered = technicians;
    if (technicians.length > 0) {
        TechniciansFiltered = await (0, filter_handle_1.filtered)(req, technicians);
    }
    if (req.query.order === 'ASC') {
        TechniciansFiltered = await (0, filter_handle_1.filteredASC)(req, technicians);
    }
    else if (req.query.order === 'DESC') {
        TechniciansFiltered = await (0, filter_handle_1.filteredDESC)(req, technicians);
    }
    return TechniciansFiltered;
};
exports.getTechniciansService = getTechniciansService;
const getTechnicianservice = async (req) => {
    const { id } = req.params;
    const technicians = await (0, technicians_1.findOneData)(id);
    return technicians;
};
exports.getTechnicianservice = getTechnicianservice;
const updateTechniciansService = async (req) => {
    const { id } = req.params;
    const { body } = req;
    await technicians_1.Technicians.update(body, { where: { id } });
    const data = await technicians_1.Technicians.findByPk(id);
    return data;
};
exports.updateTechniciansService = updateTechniciansService;
const deleteTechniciansService = async (req) => {
    const { id } = req.params;
    return await technicians_1.Technicians.destroy({ where: { id } });
};
exports.deleteTechniciansService = deleteTechniciansService;
