"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Order_controller_1 = __importDefault(require("../controllers/Order.controller"));
const orderRouter = (0, express_1.Router)();
orderRouter.get('/', Order_controller_1.default.getAll);
exports.default = orderRouter;
