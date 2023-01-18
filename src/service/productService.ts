import {Product} from "../model/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
    }

    getAll = async () => {
        let sql ='select p.id, p.name, p.price, p.image,p.description, c.id as idCategory, c.name as nameCategory from product p join category c on p.category = c.id'
        let products = await this.productRepository.query(sql);
        return products ;
    }

    save = async (product) => {      // product này vẫn chưa có id
        return this.productRepository.save(product); //khởi tạo đã có id
    }

   private update = async (id,newProduct) => {
       let product = await this.productRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        newProduct.id = id;
        return this.productRepository.update({id: id}, newProduct);
    }
    // Tìm bằng ID
    private findByID = async (id) => {
        let product = await this.productRepository.findOneBy({id: id});  //findOne là tìm ra một thằng
        if (!product){
            return null;
        }else {
            return product;
        }
    }

    private delete= async (id) => {
        let product = await this.productRepository.findOneBy({id: id});  //findOne là tìm ra một thằng
        if (!product){
            return null;
        }else {
          return this.productRepository.delete({id: id});
        }
    }

    findByName = async (search)=>{
        let product = await this.productRepository.findOneBy({name: {$regex:`(.*)${search.search}(.*)`} })
        if (!product){
            return null;
        }
        return product;
    }

    findByUsername= async (username)=>{
        let product = await this.productRepository.findOneBy({username: username})
        if (!product){
            return null;
        }
        return product;
    }

}

export default new ProductService();