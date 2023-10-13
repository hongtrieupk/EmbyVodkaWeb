

export default class ProductModel {
    constructor(id, name, imageUrls, price, salePrice, rating, colors, description, sizes) {
        this.id = id;
        this.name = name;
        this.imageUrls = imageUrls ?? [];
        this.price = price;
        this.salePrice = salePrice;
        this.rating = rating ?? 0;
        this.colors = colors ?? [];
        this.description = description;
        this.sizes = sizes ?? [];
    }

    get mainImgUrl() {
        return this.imageUrls?.length > 0 ? this.imageUrls[0] : '';
    }

    get secondImgUrl() {
        return this.imageUrls?.length > 1 ? this.imageUrls[1] : '';
    }
}