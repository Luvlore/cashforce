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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Order extends sequelize_1.Model {
}
exports.Order = Order;
Order.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    orderNfId: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
        unique: "orderNfId"
    },
    orderNumber: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    orderPath: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        unique: "orderPath"
    },
    orderFileName: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        unique: "orderFileName"
    },
    orderOriginalName: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        unique: "orderOriginalName"
    },
    emissionDate: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    pdfFile: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    emitedTo: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    nNf: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    CTE: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    value: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    cnpjId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'cnpjs',
            key: 'id'
        }
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    buyerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'buyers',
            key: 'id'
        }
    },
    providerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'providers',
            key: 'id'
        }
    },
    orderStatusBuyer: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "0"
    },
    orderStatusProvider: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "0"
    },
    deliveryReceipt: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    cargoPackingList: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    deliveryCtrc: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
}, {
    sequelize: config_1.default,
    tableName: 'orders',
    timestamps: true,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        },
        {
            name: "orderNfId",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "orderNfId" },
            ]
        },
        {
            name: "orderPath",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "orderPath" },
            ]
        },
        {
            name: "orderFileName",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "orderFileName" },
            ]
        },
        {
            name: "orderOriginalName",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "orderOriginalName" },
            ]
        },
        {
            name: "buyerId",
            using: "BTREE",
            fields: [
                { name: "buyerId" },
            ]
        },
        {
            name: "cnpjId",
            using: "BTREE",
            fields: [
                { name: "cnpjId" },
            ]
        },
        {
            name: "providerId",
            using: "BTREE",
            fields: [
                { name: "providerId" },
            ]
        },
        {
            name: "userId",
            using: "BTREE",
            fields: [
                { name: "userId" },
            ]
        },
    ]
});
