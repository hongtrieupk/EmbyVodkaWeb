<script>
import { onMounted } from 'vue'
import { owlCarouselHomeSpecialProducts } from '../../../../assets/legacy/vendor-template'

export default {
    name: 'ShopPageHomeSpecialProducts',
    setup() {
        onMounted(() => {
            owlCarouselHomeSpecialProducts();
        })
    }

}
</script>

<template>
    <div id="ttspecial" class="ttspecial my-40 bottom-to-top hb-animate-element">
        <div class="container">
            <div class="row">
                <div class="tt-title d-inline-block float-none w-100 text-center">special products</div>
                <div class="ttspecial-content products grid owl-carousel">
                    <div class="product-layouts">
                        <div class="product-thumb">
                            <div class="image vertical_scrolling_bottom_to_top">
                                <a href="#">
                                    <img src="../../../../assets/img/products/01.jpg" alt="01" />
                                    <img src="../../../../assets/img/products/02.jpg" alt="02"
                                        class="second_image img-responsive" /> </a>
                                <ul class="countdown countdown2">
                                    <li><span class="days">00</span>
                                        <p class="days_text">Days</p>
                                    </li>
                                    <li><span class="hours">00</span>
                                        <p class="hours_text">Hours</p>
                                    </li>
                                    <li><span class="minutes">00</span>
                                        <p class="minutes_text">Minutes</p>
                                    </li>
                                    <li><span class="seconds">00</span>
                                        <p class="seconds_text">Seconds</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="thumb-description">
                                <div class="caption">
                                    <h4 class="product-title text-capitalize"><a href="product-details.html">aliquam quaerat
                                            voluptatem</a>
                                    </h4>
                                </div>
                                <div class="rating">
                                    <div class="product-ratings d-inline-block align-middle">
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="regular-price">$100.00</div>
                                    <div class="old-price">$150.00</div>
                                </div>
                                <div class="button-wrapper">
                                    <div class="button-group text-center">
                                        <button type="button" class="btn btn-primary btn-cart" data-toggle="modal"
                                            data-target="#product_view" disabled="disabled"><i
                                                class="material-icons">shopping_cart</i><span>Add to
                                                cart</span></button>
                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                                View</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-layouts">
                        <div class="product-thumb">
                            <div class="image vertical_scrolling_bottom_to_top">
                                <a href="#">
                                    <img src="../../../../assets/img/products/02.jpg" alt="02" />
                                    <img src="../../../../assets/img/products/03.jpg" alt="03"
                                        class="second_image img-responsive" /> </a>
                            </div>
                            <div class="thumb-description">
                                <div class="caption">
                                    <h4 class="product-title text-capitalize"><a href="product-details.html">aspetur autodit
                                            autfugit</a>
                                    </h4>
                                </div>
                                <div class="rating">
                                    <div class="product-ratings d-inline-block align-middle">
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="regular-price">$100.00</div>
                                    <div class="old-price">$150.00</div>
                                </div>
                                <div class="button-wrapper">
                                    <div class="button-group text-center">
                                        <button type="button" class="btn btn-primary btn-cart" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">shopping_cart</i><span>Add
                                                to
                                                cart</span></button>
                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                                View</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-layouts">
                        <div class="product-thumb">
                            <div class="image vertical_scrolling_bottom_to_top">
                                <a href="#">
                                    <img src="../../../../assets/img/products/03.jpg" alt="03" />
                                    <img src="../../../../assets/img/products/04.jpg" alt="04"
                                        class="second_image img-responsive" /> </a>
                            </div>
                            <div class="thumb-description">
                                <div class="caption">
                                    <h4 class="product-title text-capitalize"><a href="product-details.html">magni dolores
                                            eosquies</a></h4>
                                </div>
                                <div class="rating">
                                    <div class="product-ratings d-inline-block align-middle">
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="regular-price">$100.00</div>
                                    <div class="old-price">$150.00</div>
                                </div>
                                <div class="button-wrapper">
                                    <div class="button-group text-center">
                                        <button type="button" class="btn btn-primary btn-cart" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">shopping_cart</i><span>Add
                                                to
                                                cart</span></button>
                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                                View</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-layouts">
                        <div class="product-thumb">
                            <div class="image vertical_scrolling_bottom_to_top">
                                <a href="#">
                                    <img src="../../../../assets/img/products/04.jpg" alt="04" />
                                    <img src="../../../../assets/img/products/05.jpg" alt="05"
                                        class="second_image img-responsive" /> </a>
                            </div>
                            <div class="thumb-description">
                                <div class="caption">
                                    <h4 class="product-title text-capitalize"><a href="product-details.html">voluptas nulla
                                            pariatur</a></h4>
                                </div>
                                <div class="rating">
                                    <div class="product-ratings d-inline-block align-middle">
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="regular-price">$100.00</div>
                                    <div class="old-price">$150.00</div>
                                </div>
                                <div class="button-wrapper">
                                    <div class="button-group text-center">
                                        <button type="button" class="btn btn-primary btn-cart" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">shopping_cart</i><span>Add
                                                to
                                                cart</span></button>
                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                                View</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-layouts">
                        <div class="product-thumb">
                            <div class="image vertical_scrolling_bottom_to_top">
                                <a href="#">
                                    <img src="../../../../assets/img/products/05.jpg" alt="05" />
                                    <img src="../../../../assets/img/products/06.jpg" alt="06"
                                        class="second_image img-responsive" /> </a>
                            </div>
                            <div class="thumb-description">
                                <div class="caption">
                                    <h4 class="product-title text-capitalize"><a href="product-details.html">aliquam quat
                                            voluptatem</a></h4>
                                </div>
                                <div class="rating">
                                    <div class="product-ratings d-inline-block align-middle">
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="regular-price">$100.00</div>
                                    <div class="old-price">$150.00</div>
                                </div>
                                <div class="button-wrapper">
                                    <div class="button-group text-center">
                                        <button type="button" class="btn btn-primary btn-cart" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">shopping_cart</i><span>Add
                                                to
                                                cart</span></button>
                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                                View</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-layouts">
                        <div class="product-thumb">
                            <div class="image vertical_scrolling_bottom_to_top">
                                <a href="#">
                                    <img src="../../../../assets/img/products/06.jpg" alt="06" />
                                    <img src="../../../../assets/img/products/07.jpg" alt="07"
                                        class="second_image img-responsive" /> </a>
                            </div>
                            <div class="thumb-description">
                                <div class="caption">
                                    <h4 class="product-title text-capitalize"><a href="product-details.html">voluptas sit
                                            aspernatur</a></h4>
                                </div>
                                <div class="rating">
                                    <div class="product-ratings d-inline-block align-middle">
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                        <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="regular-price">$100.00</div>
                                    <div class="old-price">$150.00</div>
                                </div>
                                <div class="button-wrapper">
                                    <div class="button-group text-center">
                                        <button type="button" class="btn btn-primary btn-cart" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">shopping_cart</i><span>Add
                                                to
                                                cart</span></button>
                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                        <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal"
                                            data-target="#product_view"><i class="material-icons">visibility</i><span>Quick
                                                View</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>