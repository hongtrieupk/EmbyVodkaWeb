<script>
import { ref, onUnmounted, onUpdated } from 'vue'
import { owlCarouselProductDetails } from '../../../assets/legacy/vendor-template'
import { shopState } from '../../../services/shop-state.service'
import ProductModel from '../../../model/product-model'
export default {
    name: 'ShopProductModal',
    setup() {
        const product = ref(new ProductModel());
        const subscription = shopState.selectingProduct$.subscribe(p => { product.value = p ?? new ProductModel(); console.log(product)});

        onUnmounted(() => {
            subscription.unsubscribe();
        })

        onUpdated(() => {
            owlCarouselProductDetails();
        })

        return {
            product
        }
    }
}

</script>

<template>
    <div class="modal fade product_view" id="product_view" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title w-100w-100w-100 font-weight-bold d-none">Quick view</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 left-columm">
                            <div class="product-large-image tab-content">
                                <div class="tab-pane" role="tabpanel" v-for="(imgUrl, index) in product.imageUrls"
                                    :key="index" :id="'product-modal-' + index" :aria-labelledby="'product-tab-' + index"
                                    :class="{ active: index === 0 }">
                                    <div class="single-img img-full">
                                        <a><img :src="imgUrl"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="default small-image-list float-left w-100">
                                <div class="nav-add small-image-slider-single-product-tabstyle-3 owl-carousel"
                                    role="tablist">
                                    <div class="single-small-image img-full" v-for="(imgUrl, index) in product.imageUrls"
                                        :key="index">
                                        <a data-toggle="tab" :id="'product-tab-' + index" :href="'#product-modal-' + index"
                                            class="img active"><img :src="imgUrl" class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 product_content">
                            <h4 class="product-title text-capitalize"> {{ product.name }} </h4>
                            <div class="rating">
                                <div class="product-ratings d-inline-block align-middle">{{ product.rating }}
                                    <span v-for="n in product.rating" :key="n" class="fa fa-stack"><i
                                            class="material-icons">star</i></span>
                                    <span v-for="n in (5 - product.rating)" :key="n" class="fa fa-stack"><i
                                            class="material-icons off">star</i></span>
                                </div>
                            </div>
                            <span class="description float-left w-100">{{ product.description }}</span>
                            <h3 class="price float-left w-100"><span class="regular-price align-middle">${{
                                product.salePrice }}</span><span class="old-price align-middle">
                                    ${{ product.price }}</span>
                            </h3>
                            <div class="product-variants float-left w-100">
                                <div class="col-md-4 col-sm-6 col-xs-12 size-options d-flex align-items-center">
                                    <h5>Size:</h5>
                                    <select class="form-control" name="select">
                                        <option value="" selected="">Size</option>
                                        <option v-for="size in product.sizes" :key="size" :value="size">{{ size }}</option>
                                    </select>
                                </div>
                                <div class="color-option d-flex align-items-center">
                                    <h5>color :</h5>
                                    <ul class="color-categories">
                                        <li v-for="color in product.colors" :key="color">
                                        <a :style="{ 'background-color': color }"></a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="btn-cart d-flex align-items-center float-left w-100">
                                <h5>qty:</h5>
                                <input value="1" type="number">
                                <button type="button" class="btn btn-primary"><i class="material-icons">shopping_cart</i>
                                    Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>