import { Request, Response } from "express";
declare class ProductController {
    private userService;
    private orderService;
    private productService;
    constructor();
    showFormLogin: (req: Request, res: Response) => Promise<void>;
    showFormSignup: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    signup: (req: Request, res: Response) => Promise<void>;
    list: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
