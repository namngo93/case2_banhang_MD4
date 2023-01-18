"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
const productService_1 = __importDefault(require("../service/productService"));
const orderService_1 = __importDefault(require("../service/orderService"));
class ProductController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            let users = await UserService_1.default.getAll();
            res.render('users/login', { users: users });
        };
        this.showFormSignup = async (req, res) => {
            res.render('users/signup');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user.role === 'Admin') {
                req.session.User = user;
                res.redirect(301, '/home');
            }
            else if (user.role === 'member') {
                req.session.User = user;
                await this.orderService.orderLoad();
                res.redirect(301, '/homeUser');
            }
            else {
                res.redirect('users/login');
            }
        };
        this.signup = async (req, res) => {
            let user = req.body;
            let users = await UserService_1.default.checkUsername(user);
            if (users === null) {
                await UserService_1.default.save(user);
                res.redirect(301, '/users/login');
            }
            else {
                res.redirect(301, '/users/signup');
            }
        };
        this.list = async (req, res) => {
            let id = req.params.id;
            let newHome = await this.productService.findByID(id);
            let user = req.session.User;
            console.log();
            newHome.user.username = user.username;
            await this.productService.update(id, newHome);
            let homes = await productService_1.default.findByUsername(user);
            res.render('users/myHomeList', { homes: homes, user: user });
        };
        this.orderService = orderService_1.default;
        this.userService = UserService_1.default;
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=userController.js.map