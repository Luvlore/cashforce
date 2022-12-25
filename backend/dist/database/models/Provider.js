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
exports.Provider = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Provider extends sequelize_1.Model {
}
exports.Provider = Provider;
Provider.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    tradingName: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    cashforceTax: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    responsibleName: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    responsibleEmail: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    responsiblePosition: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    responsiblePhone: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    responsibleMobile: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    website: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    postalCode: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    number: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    complement: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    neighborhood: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    city: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    state: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    bank: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    bankAgency: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    account: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    documents: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    situation: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    situationDate: {
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
    email: {
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
    tableName: 'providers',
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
            name: "cnpjId",
            using: "BTREE",
            fields: [
                { name: "cnpjId" },
            ]
        },
    ]
});
