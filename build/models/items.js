"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneData = exports.findAllData = exports.Item = void 0;
const Sequelize = __importStar(require("sequelize"));
const postgres_1 = require("../config/postgres");
const user_1 = require("./user");
const Item = postgres_1.sequelize.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    reference: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER
    }
});
exports.Item = Item;
async function findAllData() {
    Item.belongsTo(user_1.Users, {
        foreignKey: 'userId'
    });
    return await Item.findAll({
        include: [
            {
                model: user_1.Users,
                attributes: [
                    'id',
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
    Item.belongsTo(user_1.Users, {
        foreignKey: 'userId'
    });
    return await Item.findByPk(id, {
        include: [
            {
                model: user_1.Users,
                attributes: [
                    'id',
                    'fullName',
                    'email',
                    'cellPhone'
                ]
            }
        ]
    });
}
exports.findOneData = findOneData;
