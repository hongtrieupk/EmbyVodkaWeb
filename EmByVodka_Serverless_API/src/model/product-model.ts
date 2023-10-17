
export default class ProductModel {
    id: number;
    name: string;
    imageUrls: string[];
    price: number;
    salePrice: number;
    rating: number;
    colors: string[];
    description: string;
    sizes: string[];
    constructor() {
        this.id = 0;
        this.name = '';
        this.imageUrls = [];
        this.price = 0;
        this.salePrice = 0;
        this.rating = 0;
        this.colors = [];
        this.description = '';
        this.sizes = [];
    }
}