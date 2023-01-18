"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select p.id, p.name, p.price, p.image,p.description, c.id as idCategory, c.name as nameCategory from product p join category c on p.category = c.id';
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.save = async (product) => {
            return this.productRepository.save(product);
        };
        this.update = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            newProduct.id = id;
            return this.productRepository.update({ id: id }, newProduct);
        };
        this.findByID = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            else {
                return product;
            }
        };
        this.delete = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            else {
                return this.productRepository.delete({ id: id });
            }
        };
        this.findByName = async (search) => {
            let product = await this.productRepository.findOneBy({ name: { $regex: `(.*)${search.search}(.*)` } });
            if (!product) {
                return null;
            }
            return product;
        };
        this.findByUsername = async (username) => {
            let product = await this.productRepository.findOneBy({ username: username });
            if (!product) {
                return null;
            }
            return product;
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map