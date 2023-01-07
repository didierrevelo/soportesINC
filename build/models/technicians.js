"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllData = exports.findOneData = exports.Technicians = void 0;
const sequelize_1 = require("sequelize");
const postgres_1 = require("../config/postgres");
const services_1 = require("./services");
const Technicians = postgres_1.sequelize.define('technicians', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    documentNumber: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    cellPhone: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('tech'),
        defaultValue: 'tech'
    }
}, {
    timestamps: true
});
exports.Technicians = Technicians;
async function findAllData() {
    Technicians.hasMany(services_1.Services, {
        foreignKey: 'technicianId'
    });
    return await Technicians.findAll({
        include: [
            {
                model: services_1.Services,
                attributes: [
                    'id',
                    'typeService',
                    'visitDay',
                    'done',
                    'comments'
                ]
            }
        ]
    });
}
exports.findAllData = findAllData;
async function findOneData(id) {
    Technicians.hasMany(services_1.Services, {
        foreignKey: 'technicianId'
    });
    return await Technicians.findByPk(id, {
        include: [
            {
                model: services_1.Services,
                attributes: [
                    'id',
                    'typeService',
                    'visitDay',
                    'done',
                    'comments'
                ]
            }
        ]
    });
}
exports.findOneData = findOneData;
