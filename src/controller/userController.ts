import {Request, Response} from "express";
import userService from "../service/UserService";
import productService from "../service/productService";
import orderService from "../service/orderService";

class ProductController {
    private userService;
    private orderService;
    private productService;
    constructor() {
        this.orderService = orderService;
        this.userService = userService;
        this.productService = productService;
    }

    showFormLogin = async (req: Request, res: Response) => {
       let users  = await userService.getAll();
        res.render('users/login',{users: users})
    }

    showFormSignup = async (req: Request, res: Response) => {
        res.render('users/signup')
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body);
        if (user.role === 'Admin' ) {
            // @ts-ignore
            req.session.User = user;
            res.redirect(301,'/home')
        } else if(user.role === 'member'){
            // @ts-ignore
            req.session.User = user;
            await this.orderService.orderLoad();
            res.redirect(301,'/homeUser')
        } else{
            res.redirect('users/login')
        }
    }

    signup = async (req: Request, res: Response) => {
        let user = req.body;
        let users = await userService.checkUsername(user)

        if (users === null) {
            await userService.save(user);
            res.redirect(301, '/users/login');
        } else {
            res.redirect(301, '/users/signup');
        }
    }

    list =  async (req: Request, res: Response) => {
        let id = req.params.id;
        let newHome = await this.productService.findByID(id)
        // console.log(newHome)
        // @ts-ignore
        let user = req.session.User;
        console.log()
        newHome.user.username = user.username;
        await this.productService.update(id,newHome);
        let homes= await productService.findByUsername(user);
        res.render('users/myHomeList', {homes: homes, user:user});
    }
}

export default new ProductController();