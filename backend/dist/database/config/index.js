"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeConnection = new sequelize_1.Sequelize('cashforce_v1', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelizeConnection;
