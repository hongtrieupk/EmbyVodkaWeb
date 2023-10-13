<script>
import { shopState } from '../../../services/shop-state.service'
import ProductModel from '../../../model/product-model'
export default {
    name: 'ShopProductLayout',
    props: {
        product: ProductModel
    },
    setup(props) {
        function setSelectingProduct() {
            shopState.updateSelectingProduct(props.product);
        }
        return {
            setSelectingProduct
        }
    }
}
</script>

<template>
    <div class="product-layouts">
        <div class="product-thumb">
            <div class="image vertical_scrolling_bottom_to_top">
                <router-link :to="'/product-details/' + product.id">
                    <img :src="product.mainImgUrl" alt="01" />
                    <img :src="product.secondImgUrl" alt="02" class="second_image img-responsive" />
                </router-link>
            </div>
            <div class="thumb-description">
                <div class="caption">
                    <h4 class="product-title text-capitalize">
                        <router-link :to="'/product-details/' + product.id">{{ product.name }}</router-link>
                    </h4>
                </div>
                <div class="rating">
                    <div class="product-ratings d-inline-block align-middle">
                        <span v-for="n in product.rating" :key="n" class="fa fa-stack"><i
                                class="material-icons">star</i></span>
                        <span v-for="n in (5 - product.rating)" :key="n" class="fa fa-stack"><i
                                class="material-icons off">star</i></span>
                    </div>
                </div>
                <div class="price">
                    <div class="regular-price">${{ product.salePrice }}</div>
                    <div class="old-price">${{ product.price }}</div>
                </div>
                <div class="button-wrapper">
                    <div class="button-group text-center">
                        <button type="button" class="btn btn-primary btn-cart">
                            <i class="material-icons">shopping_cart</i><span>Add to
                                cart</span></button>
                        <a class="btn btn-primary btn-wishlist"><i
                                class="material-icons">favorite</i><span>wishlist</span></a>
                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal" @click="setSelectingProduct"
                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                View</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>