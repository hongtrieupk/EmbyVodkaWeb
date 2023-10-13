
import { Subject } from 'rxjs'
import ProductModel from '../model/product-model'


class ShopStateService {
    constructor() { }
    #selectingProduct$ = new Subject(new ProductModel());
    get selectingProduct$() {
        return this.#selectingProduct$.asObservable();
    }

    updateSelectingProduct(product) {
        this.#selectingProduct$.next(product);
    }
}

const _shopState = new ShopStateService();
export const shopState = _shopState

