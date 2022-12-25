"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offers = void 0;
const sequelize_1 = require("sequelize");
class offers extends sequelize_1.Model {
    static initModel(sequelize) {
        return offers.init({
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
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize,
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
    }
}
exports.offers = offers;
