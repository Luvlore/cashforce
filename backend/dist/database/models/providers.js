"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = void 0;
const sequelize_1 = require("sequelize");
class providers extends sequelize_1.Model {
    static initModel(sequelize) {
        return providers.init({
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
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize,
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
    }
}
exports.providers = providers;
