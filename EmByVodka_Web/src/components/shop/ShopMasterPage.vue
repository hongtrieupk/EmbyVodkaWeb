<script>
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'theia-sticky-sidebar'
import 'masonry-layout/dist/masonry.pkgd'
import '../../assets/legacy/inview'

import { onMounted } from 'vue'
import { initializeWindowEvent, initializePage } from '../../assets/legacy/vendor-template'

import ShopLayoutHeader from './layout/ShopLayoutHeader.vue'
import ShopLayoutCookieAlert from './layout/ShopLayoutCookieAlert.vue'
import ShopLayoutFooter from './layout/ShopLayoutFooter.vue'

export default {
    name: 'App',
    components: {
        ShopLayoutHeader,
        ShopLayoutCookieAlert,
        ShopLayoutFooter
    },
    setup() {
        onMounted(() => {
            initializeWindowEvent();
            initializePage();
        })
    }
}
</script>

<template>
    <ShopLayoutHeader />
    <router-view></router-view>
    <ShopLayoutFooter />
    <ShopLayoutCookieAlert />
    <!-- product_view modal -->

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
                                <div class="tab-pane active" id="product-1" role="tabpanel" aria-labelledby="product-tab-1">
                                    <div class="single-img img-full">
                                        <a href="img/products/01.jpg"><img src="../../assets/img/products/01.jpg"
                                                class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                                <div class="tab-pane" id="product-2" role="tabpanel" aria-labelledby="product-tab-2">
                                    <div class="single-img">
                                        <a href="img/products/02.jpg"><img src="../../assets/img/products/02.jpg"
                                                class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                                <div class="tab-pane" id="product-3" role="tabpanel" aria-labelledby="product-tab-3">
                                    <div class="single-img">
                                        <a href="img/products/03.jpg"><img src="../../assets/img/products/03.jpg"
                                                class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                                <div class="tab-pane" id="product-4" role="tabpanel" aria-labelledby="product-tab-4">
                                    <div class="single-img">
                                        <a href="img/products/04.jpg"><img src="../../assets/img/products/04.jpg"
                                                class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                                <div class="tab-pane" id="product-5" role="tabpanel" aria-labelledby="product-tab-5">
                                    <div class="single-img">
                                        <a href="img/products/05.jpg"><img src="../../assets/img/products/05.jpg"
                                                class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="small-image-list float-left w-100">
                                <div class="nav-add small-image-slider-single-product-tabstyle-3 owl-carousel"
                                    role="tablist">
                                    <div class="single-small-image img-full">
                                        <a data-toggle="tab" id="product-tab-1" href="#product-1" class="img active"><img
                                                src="../../assets/img/products/01.jpg" class="img-fluid" alt=""></a>
                                    </div>
                                    <div class="single-small-image img-full">
                                        <a data-toggle="tab" id="product-tab-2" href="#product-2" class="img"><img
                                                src="../../assets/img/products/02.jpg" class="img-fluid" alt=""></a>
                                    </div>
                                    <div class="single-small-image img-full">
                                        <a data-toggle="tab" id="product-tab-3" href="#product-3" class="img"><img
                                                src="../../assets/img/products/03.jpg" class="img-fluid" alt=""></a>
                                    </div>
                                    <div class="single-small-image img-full">
                                        <a data-toggle="tab" id="product-tab-4" href="#product-4" class="img"><img
                                                src="../../assets/img/products/04.jpg" class="img-fluid" alt=""></a>
                                    </div>
                                    <div class="single-small-image img-full">
                                        <a data-toggle="tab" id="product-tab-5" href="#product-5" class="img"><img
                                                src="../../assets/img/products/05.jpg" class="img-fluid" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 product_content">
                            <h4 class="product-title text-capitalize">aliquam quaerat voluptatem</h4>
                            <div class="rating">
                                <div class="product-ratings d-inline-block align-middle">
                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                    <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                </div>
                            </div>
                            <span class="description float-left w-100">Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book.</span>
                            <h3 class="price float-left w-100"><span class="regular-price align-middle">$75.00</span><span
                                    class="old-price align-middle">$60.00</span></h3>

                            <div class="product-variants float-left w-100">
                                <div class="col-md-4 col-sm-6 col-xs-12 size-options d-flex align-items-center">
                                    <h5>Size:</h5>

                                    <select class="form-control" name="select">
                                        <option value="" selected="">Size</option>
                                        <option value="black">Medium</option>
                                        <option value="white">Large</option>
                                        <option value="gold">Small</option>
                                        <option value="rose gold">Extra large</option>
                                    </select>
                                </div>
                                <div class="color-option d-flex align-items-center">
                                    <h5>color :</h5>
                                    <ul class="color-categories">
                                        <li class="active">
                                            <a class="tt-pink" href="#" title="Pink"></a>
                                        </li>
                                        <li>
                                            <a class="tt-blue" href="#" title="Blue"></a>
                                        </li>
                                        <li>
                                            <a class="tt-yellow" href="#" title="Yellow"></a>
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
    <!-- cart-pop modal -->
    <div class="modal fade" id="cart-pop" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header alert-success">
                    <h4 class="modal-title w-100w-100w-100">Product successfully added to your shopping cart</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 divide-right">
                            <div class="row">
                                <div class="col-md-5 col-sm-4 col-xs-12 product-img float-left">
                                    <img src="../../assets/img/products/01.jpg" class="img-responsive" alt="01">
                                </div>
                                <div class="col-md-7 col-sm-8 col-xs-12 product-desc float-left">
                                    <h4 class="product-title text-capitalize">aliquam quaerat voluptatem</h4>
                                    <div class="rating">
                                        <div class="product-ratings d-inline-block align-middle">
                                            <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                            <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                            <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                            <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                            <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        </div>
                                    </div>
                                    <h3 class="price float-left w-100"><span
                                            class="regular-price align-middle">$75.00</span><span
                                            class="old-price align-middle">$60.00</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 divide-left">
                            <p class="cart-products-count">There are 2 items in your cart.</p>
                            <p class="total-products float-left w-100">
                                <strong>Total products:</strong> $150.00
                            </p>
                            <p class="shipping float-left w-100">
                                <strong>Total shipping:</strong> free
                            </p>
                            <p class="total-price float-left w-100">
                                <strong>Total:</strong> $150.00(tax incl.)
                            </p>
                            <div class="cart-content-btn float-left w-100">
                                <form action="#">
                                    <input class="btn pull-right mt_10 btn-primary" value="Continue shopping" type="submit">
                                </form>
                                <form action="checkout_page.html">
                                    <input class="btn pull-right mt_10 btn-secondary" value="Proceed to checkout"
                                        type="submit">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>