import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/categoryService";
import userService from "../service/userService";


class ProductController {
    private productService;
    private categoryService;
    private userService;
    constructor() {
        this.productService = productService;
        this.categoryService= categoryService;
        this.userService = userService;
    }

    showHome = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        let categories = await categoryService.getAll();
        res.render('home', {products: products, categories: categories})
    }

    showHomeUser= async (req: Request, res: Response) => {
        let homes = await productService.getAll();
        let categories = await categoryService.getAll();
          // @ts-ignore
        let user =  req.session.User;
        res.render('homeUser', {homes: homes, user: user,categories: categories})
    }

    search =  async (req: Request, res: Response) => {
        let homes = await this.productService.findByName(req.body);
        res.render('home', {homes: homes})
    }

    searchUser =  async (req: Request, res: Response) => {
        let homes = await this.productService.findByName(req.body);
        // @ts-ignore
        let user = req.session.User;
        res.render('homeUser', {homes: homes, user: user})
    }

    showFormCreate = async (req: Request, res: Response) => {
        let categories = await categoryService.getAll()
        res.render('homes/create', {categories: categories});
    }

    create = async (req: Request, res: Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let home = req.body;
                home.image = '/storage/' + image.name;
                await productService.save(home);
                // console.log(1)
                res.redirect(301, '/home');
            }
        }
    }
    showFormEdit = async (req: Request, res: Response) => {
        let id = req.params.id;
        let homes = await this.productService.findByID(id);
        res.render('homes/edit', {home: homes});
    }

    update = async (req: Request, res: Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let id = req.params.id;
                let home = req.body;
                home.image = '/storage/' + image.name;
                await this.productService.update(id, home);
                res.redirect(301, '/home');
            }
        }
    }

    showFormDelete = async (req: Request, res: Response) => {
        let idDelete = req.params.id;
        res.render('homes/delete', {idDelete: idDelete});
    }

    delete = async (req: Request, res: Response) => {
       let id = req.params.id;
       await this.productService.delete(id);
       res.redirect(301, '/home');
            }


       // showMyHome = async (req: Request, res: Response) => {
       //     let idHome = req.params.idHome;
       //     let username = req.params.username;
       //     let homes = await this.homeService.findByID(idHome);
       //     let user = await this.userService.checkUsername(username);
       //     res.redirect(301, '/thue');
       // }
 }

export default new ProductController();