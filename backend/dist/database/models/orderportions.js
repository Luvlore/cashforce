"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderportions = void 0;
const sequelize_1 = require("sequelize");
class orderportions extends sequelize_1.Model {
    static initModel(sequelize) {
        return orderportions.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nDup: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            dVenc: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            vDup: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            availableToMarket: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 1
            },
            orderId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'orders',
                    key: 'id'
                }
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize,
            tableName: 'orderportions',
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
            ]
        });
    }
}
exports.orderportions = orderportions;
