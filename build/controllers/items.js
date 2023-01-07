"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.postItem = exports.updateItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
const items_services_1 = require("../services/items.services");
const getItem = async (req, res) => {
    try {
        const item = await (0, items_services_1.getItemService)(req);
        const data = (item != null) ? item : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEM', error);
    }
};
exports.getItem = getItem;
const getItems = async (req, res) => {
    try {
        const ItemsFiltered = await (0, items_services_1.getItemsService)(req);
        const data = (ItemsFiltered.length !== 0) ? ItemsFiltered : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEMS', error);
    }
};
exports.getItems = getItems;
const updateItem = async (req, res) => {
    try {
        const update = await (0, items_services_1.updateItemService)(req);
        const data = (update != null) ? update : 'NOT_FOUND';
        res.status(200).json(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_ITEM', error);
    }
};
exports.updateItem = updateItem;
const postItem = async (req, res) => {
    try {
        const newItem = await (0, items_services_1.insertItem)(req.body, req);
        res.status(201).json(newItem);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_ITEM', error);
    }
};
exports.postItem = postItem;
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, items_services_1.deleteItemService)(req);
        res.send(`Item with id ${Number(id)} was deleted`);
        res.status(204);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_ITEM', error);
    }
};
exports.deleteItem = deleteItem;
