"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/login', userController_1.default.showFormLogin);
exports.userRouter.post('/login', userController_1.default.login);
exports.userRouter.get('/signup', userController_1.default.showFormSignup);
exports.userRouter.post('/signup', userController_1.default.signup);
exports.userRouter.post('/list/:id', userController_1.default.list);
//# sourceMappingURL=userRouter.js.map