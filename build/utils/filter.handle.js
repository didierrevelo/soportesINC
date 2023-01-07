"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredDESC = exports.filteredASC = exports.filtered = void 0;
const filtered = async (req, data) => {
    if (data.length > 0) {
        const filters = req.query;
        const filteredItems = data.filter(filter => {
            let isValid = true;
            for (const key in filters) {
                isValid = isValid && filter[key] === filters[key];
            }
            return isValid;
        });
        return filteredItems;
    }
};
exports.filtered = filtered;
const filteredASC = async (req, data) => {
    let filteredItems;
    const filters = req.query.order;
    if (filters === 'ASC') {
        for (const key in filters) {
            const sortData = data.sort((a, b) => (a[key] > b[key]) ? -1 : 1);
            filteredItems = sortData;
        }
    }
    return filteredItems;
};
exports.filteredASC = filteredASC;
const filteredDESC = async (req, data) => {
    let filteredItemsDESC;
    const filters = req.query.order;
    if (filters === 'DESC') {
        const sortData = data.reverse();
        filteredItemsDESC = sortData;
    }
    return filteredItemsDESC;
};
exports.filteredDESC = filteredDESC;
