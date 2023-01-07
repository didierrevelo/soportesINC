"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.postService = exports.updateService = exports.getServices = exports.getService = void 0;
const error_handle_1 = require("../utils/error.handle");
const services_services_1 = require("../services/services.services");
const getService = async (req, res) => {
    try {
        const service = await (0, services_services_1.getServiceService)(req);
        const data = (service != null) ? service : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_Service', error);
    }
};
exports.getService = getService;
const getServices = async (req, res) => {
    try {
        const ServicesFiltered = await (0, services_services_1.getServicesService)(req);
        const data = (ServicesFiltered.length !== 0) ? ServicesFiltered : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_Services', error);
    }
};
exports.getServices = getServices;
const updateService = async (req, res) => {
    try {
        const data = await (0, services_services_1.updateServicesService)(req);
        const dataUpdate = (data != null) ? data : 'NOT_FOUND';
        res.status(200).json(dataUpdate);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_Service', error);
    }
};
exports.updateService = updateService;
const postService = async (req, res) => {
    try {
        const newService = await (0, services_services_1.insertServices)(req.body, req);
        res.status(201).json(newService);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_SERVICE', error);
    }
};
exports.postService = postService;
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, services_services_1.deleteServicesService)(req);
        res.send(`Service with id ${Number(id)} was deleted`);
        res.status(204);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_Service', error);
    }
};
exports.deleteService = deleteService;
