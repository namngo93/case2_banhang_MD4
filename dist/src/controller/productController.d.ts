import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    private userService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showHomeUser: (req: Request, res: Response) => Promise<void>;
    search: (req: Request, res: Response) => Promise<void>;
    searchUser: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    showFormDelete: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
