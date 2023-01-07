"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTechnician = exports.updateTechnician = exports.getTechnicians = exports.getTechnician = void 0;
const error_handle_1 = require("../utils/error.handle");
const technicians_services_1 = require("../services/technicians.services");
const getTechnician = async (req, res) => {
    try {
        const technician = await (0, technicians_services_1.getTechnicianservice)(req);
        const data = (technician != null) ? technician : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_TECHNICIAN', error);
    }
};
exports.getTechnician = getTechnician;
const getTechnicians = async (req, res) => {
    try {
        const technicianFiltered = await (0, technicians_services_1.getTechniciansService)(req);
        const data = (technicianFiltered.length !== 0) ? technicianFiltered : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_TECHNICIANS', error);
    }
};
exports.getTechnicians = getTechnicians;
const updateTechnician = async (req, res) => {
    try {
        const data = await (0, technicians_services_1.updateTechniciansService)(req);
        const dataUpdate = (data != null) ? data : 'NOT_FOUND';
        res.status(200).json(dataUpdate);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_TECHNICIAN', error);
    }
};
exports.updateTechnician = updateTechnician;
const deleteTechnician = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, technicians_services_1.deleteTechniciansService)(req);
        res.send(`Service with id ${Number(id)} was deleted`);
        res.status(204);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_TECHNICIAN', error);
    }
};
exports.deleteTechnician = deleteTechnician;
