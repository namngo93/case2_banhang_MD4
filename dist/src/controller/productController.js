"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
const userService_1 = __importDefault(require("../service/userService"));
class ProductController {
    constructor() {
        this.showHome = async (req, res) => {
            let products = await productService_1.default.getAll();
            let categories = await categoryService_1.default.getAll();
            res.render('home', { products: products, categories: categories });
        };
        this.showHomeUser = async (req, res) => {
            let homes = await productService_1.default.getAll();
            let categories = await categoryService_1.default.getAll();
            let user = req.session.User;
            res.render('homeUser', { homes: homes, user: user, categories: categories });
        };
        this.search = async (req, res) => {
            let homes = await this.productService.findByName(req.body);
            res.render('home', { homes: homes });
        };
        this.searchUser = async (req, res) => {
            let homes = await this.productService.findByName(req.body);
            let user = req.session.User;
            res.render('homeUser', { homes: homes, user: user });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await categoryService_1.default.getAll();
            res.render('homes/create', { categories: categories });
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let home = req.body;
                    home.image = '/storage/' + image.name;
                    await productService_1.default.save(home);
                    res.redirect(301, '/home');
                }
            }
        };
        this.showFormEdit = async (req, res) => {
            let id = req.params.id;
            let homes = await this.productService.findByID(id);
            res.render('homes/edit', { home: homes });
        };
        this.update = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let id = req.params.id;
                    let home = req.body;
                    home.image = '/storage/' + image.name;
                    await this.productService.update(id, home);
                    res.redirect(301, '/home');
                }
            }
        };
        this.showFormDelete = async (req, res) => {
            let idDelete = req.params.id;
            res.render('homes/delete', { idDelete: idDelete });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.productService.delete(id);
            res.redirect(301, '/home');
        };
        this.productService = productService_1.default;
        this.categoryService = categoryService_1.default;
        this.userService = userService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map