"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnpjs = void 0;
const sequelize_1 = require("sequelize");
class cnpjs extends sequelize_1.Model {
    static initModel(sequelize) {
        return cnpjs.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cnpj: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
                unique: "cnpj"
            },
            companyType: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize,
            tableName: 'cnpjs',
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
                    name: "cnpj",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cnpj" },
                    ]
                },
            ]
        });
    }
}
exports.cnpjs = cnpjs;
