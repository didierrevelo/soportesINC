"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItemService = exports.updateItemService = exports.getItemService = exports.getItemsService = exports.insertItem = void 0;
const items_1 = require("../models/items");
const filter_handle_1 = require("../utils/filter.handle");
const insertItem = async (items, req) => {
    const { id, reference, name, amount, description } = items;
    const responseInsert = await items_1.Item.create({
        id,
        reference,
        name,
        amount,
        description,
        userId: req.user.id
    });
    return responseInsert;
};
exports.insertItem = insertItem;
const getItemsService = async (req) => {
    const item = await (0, items_1.findAllData)();
    let ItemsFiltered = item;
    if (item.length > 0) {
        ItemsFiltered = await (0, filter_handle_1.filtered)(req, item);
    }
    if (req.query.order === 'ASC') {
        ItemsFiltered = await (0, filter_handle_1.filteredASC)(req, item);
    }
    else if (req.query.order === 'DESC') {
        ItemsFiltered = await (0, filter_handle_1.filteredDESC)(req, item);
    }
    return ItemsFiltered;
};
exports.getItemsService = getItemsService;
const getItemService = async (req) => {
    const { id } = req.params;
    const item = await (0, items_1.findOneData)(id);
    return item;
};
exports.getItemService = getItemService;
const updateItemService = async (req) => {
    const { id } = req.params;
    const { body } = req;
    await items_1.Item.update(body, { where: { id } });
    const data = await items_1.Item.findByPk(id);
    return data;
};
exports.updateItemService = updateItemService;
const deleteItemService = async (req) => {
    const { id } = req.params;
    return await items_1.Item.destroy({ where: { id } });
};
exports.deleteItemService = deleteItemService;
