"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = void 0;
const sequelize_1 = require("sequelize");
class orders extends sequelize_1.Model {
    static initModel(sequelize) {
        return orders.init({
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
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize,
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
    }
}
exports.orders = orders;
