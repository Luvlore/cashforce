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
exports.Offer = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Offer extends sequelize_1.Model {
}
exports.Offer = Offer;
Offer.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tax: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    tariff: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    adValorem: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    float: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    iof: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    expiresIn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    paymentStatusSponsor: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    },
    paymentStatusProvider: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    },
    orderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'orders',
            key: 'id'
        }
    },
    sponsorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'sponsors',
            key: 'id'
        }
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
    tableName: 'offers',
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
            name: "orderId",
            using: "BTREE",
            fields: [
                { name: "orderId" },
            ]
        },
        {
            name: "sponsorId",
            using: "BTREE",
            fields: [
                { name: "sponsorId" },
            ]
        },
    ]
});
