
export default class ProductModel {
    constructor(id, name, imageUrls, price, salePrice, rating, colors, description, sizes) {
        this.id = id;
        this.name = name;
        this.imageUrls = imageUrls ?? [];
        this.price = price ?? 0;
        this.salePrice = salePrice ?? 0;
        this.rating = rating ?? 0;
        this.colors = colors ?? [];
        this.description = description ?? '';
        this.sizes = sizes ?? [];
    }
}