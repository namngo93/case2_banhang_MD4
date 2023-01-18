"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const productRouter_1 = require("./productRouter");
const userRouter_1 = require("./userRouter");
const orderRouter_1 = require("./orderRouter");
exports.router = (0, express_1.Router)();
exports.router.get('/home', productController_1.default.showHome);
exports.router.get('/homeUser', productController_1.default.showHomeUser);
exports.router.post('/home', productController_1.default.search);
exports.router.post('/homeUser', productController_1.default.searchUser);
exports.router.use('/homes', productRouter_1.productRouter);
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/orders', orderRouter_1.orderRouter);
//# sourceMappingURL=router.js.map