declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (product: any) => Promise<any>;
    private update;
    private findByID;
    private delete;
    findByName: (search: any) => Promise<any>;
    findByUsername: (username: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
