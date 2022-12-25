"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const sequelize_1 = require("sequelize");
class users extends sequelize_1.Model {
    static initModel(sequelize) {
        return users.init({
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
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
                unique: "email"
            },
            phoneNumber: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            mobile: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            departament: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            verificationCode: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            emailChecked: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            cashforceAdm: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize,
            tableName: 'users',
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
                    name: "email",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "email" },
                    ]
                },
            ]
        });
    }
}
exports.users = users;
