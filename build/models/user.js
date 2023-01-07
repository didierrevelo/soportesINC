"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllData = exports.findOneData = exports.Users = void 0;
const sequelize_1 = require("sequelize");
const postgres_1 = require("../config/postgres");
const services_1 = require("./services");
const Users = postgres_1.sequelize.define('users', {
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
        type: sequelize_1.DataTypes.STRING
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
        type: sequelize_1.DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
    }
}, {
    timestamps: true
});
exports.Users = Users;
async function findAllData() {
    Users.hasMany(services_1.Services, {
        foreignKey: 'userId',
        sourceKey: 'id'
    });
    services_1.Services.belongsTo(Users, {
        foreignKey: 'userId',
        targetKey: 'id'
    });
    return await Users.findAll({
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
    Users.hasMany(services_1.Services, {
        foreignKey: 'userId'
    });
    return await Users.findByPk(id, {
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
