<script>
export default {
    name: 'ShopProductLayoutDetails',
    props: {
        product: Object
    },
    setup(props) {
        // TODO: move this logic to product class/object
        const mainImgUrl = props.product.imageUrls.length > 0 ? props.product.imageUrls[0] : '';
        const secondImgUrl = props.product.imageUrls.length > 1 ? props.product.imageUrls[2] : '';

        return {
            mainImgUrl,
            secondImgUrl
        };
    }
}
</script>

<template>
    <div class="product-layouts">
        <div class="product-thumb row">
            <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                <router-link to="/products">
                    <a class="d-block position-relative">
                        <img :src="mainImgUrl" alt="01" />
                        <img :src="secondImgUrl" alt="02" class="second_image img-responsive" />
                    </a>
                </router-link>
            </div>
            <div class="thumb-description col-xs-12 col-sm-7 col-md-8 position-static text-left">
                <div class="caption">
                    <h4 class="product-title text-capitalize">
                        <router-link to="/products">{{ product.name }}</router-link>
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
                <div class="description">{{ product.description }}</div>
                <div class="price">
                    <div class="regular-price">${{ product.salePrice }}</div>
                    <div class="old-price">${{ product.price }}</div>
                </div>
                <div class="color-option d-flex align-items-center float-left w-100">
                    <ul class="color-categories">
                        <li v-for="color in product.colors" :key="color">
                            <a :style="{ 'background-color': color }"></a>
                        </li>
                    </ul>
                </div>
                <div class="button-wrapper">
                    <div class="button-group text-center">
                        <button type="button" class="btn btn-primary btn-cart">
                            <i class="material-icons">shopping_cart</i><span>Add to
                                cart</span></button>
                        <a class="btn btn-primary btn-wishlist"><i
                                class="material-icons">favorite</i><span>wishlist</span></a>
                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                View</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>