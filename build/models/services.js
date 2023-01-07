"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneData = exports.findAllData = exports.Services = void 0;
const sequelize_1 = require("sequelize");
const postgres_1 = require("../config/postgres");
const technicians_1 = require("./technicians");
const Services = postgres_1.sequelize.define('services', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeService: {
        type: sequelize_1.DataTypes.ENUM('instalacion', 'mantenimiento', 'reparacion')
    },
    visitDay: {
        type: sequelize_1.DataTypes.DATE('YYYY-MM-DD')
    },
    done: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    comments: {
        type: sequelize_1.DataTypes.STRING
    },
    technicianId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: true
});
exports.Services = Services;
async function findAllData() {
    Services.belongsTo(technicians_1.Technicians, {
        foreignKey: 'technicianId'
    });
    return await Services.findAll({
        include: [
            {
                model: technicians_1.Technicians,
                attributes: [
                    'fullName',
                    'email',
                    'cellPhone'
                ]
            }
        ]
    });
}
exports.findAllData = findAllData;
async function findOneData(id) {
    Services.belongsTo(technicians_1.Technicians, {
        foreignKey: 'technicianId'
    });
    return await Services.findByPk(id, {
        include: [
            {
                model: technicians_1.Technicians,
                attributes: [
                    'fullName',
                    'email',
                    'cellPhone'
                ]
            }
        ]
    });
}
exports.findOneData = findOneData;
