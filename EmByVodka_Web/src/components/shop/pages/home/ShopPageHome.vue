<script>
import ShopPageHomeSlider from './ShopPageHomeSlider.vue'
import ShopPageHomeAbout from './ShopPageHomeAbout.vue'
import ShopPageHomeTrendingProducts from './ShopPageHomeTrendingProducts.vue'

export default {
    name: 'ShopPageHome',
    components: {
        ShopPageHomeSlider,
        ShopPageHomeAbout,
        ShopPageHomeTrendingProducts
    }
}
</script>

<template>
    <main>
        <ShopPageHomeSlider />
        <div class="main-content">
            <ShopPageHomeAbout />
            <div id="main">
                <ShopPageHomeTrendingProducts />
                <div id="ttcmsparallax"
                    class="ttcmsparallax my-40 my-sm-25 bottom-to-top hb-animate-element float-left w-100">
                    <div class="parallax float-left w-100">
                        <div class="content-wrap float-right text-center">
                            <div class="description text-capitalize mb-30">big sale</div>
                            <div class="title text-capitalize mb-40">get upto 30% off</div>
                            <div class="button"><a class="btn-primary text-capitalize" href="#">shop now</a></div>
                        </div>
                    </div>
                </div>
                <div id="ttlookbook" class="ttlook my-40 bottom-to-top hb-animate-element float-left w-100">
                    <div class="container">
                        <div class="row">
                            <div class="ttlookbook-content products grid owl-carousel">
                                <div class="product-layouts">
                                    <div class="product-thumb">
                                        <div class="image vertical_scrolling_bottom_to_top col-sm-6 float-right">
                                            <div class="inner-img">
                                                <div class="image">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/products/01.jpg" alt="01" />
                                                        <img src="../../../../assets/img/products/02.jpg" alt="02"
                                                            class="second_image img-responsive" />
                                                    </a>
                                                </div>
                                                <div class="image">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/products/02.jpg" alt="01" />
                                                        <img src="../../../../assets/img/products/03.jpg" alt="02"
                                                            class="second_image img-responsive" />
                                                    </a>
                                                </div>
                                                <div class="image">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/products/04.jpg" alt="01" />
                                                        <img src="../../../../assets/img/products/05.jpg" alt="02"
                                                            class="second_image img-responsive" />
                                                    </a>
                                                </div>
                                                <div class="image">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/products/06.jpg" alt="01" />
                                                        <img src="../../../../assets/img/products/07.jpg" alt="02"
                                                            class="second_image img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="thumb-description col-sm-6">
                                            <div class="caption mb-20">
                                                <h4 class="product-title text-capitalize"><a href="product-details.html"
                                                        class="position-relative">aliquam quaerat voluptatem</a></h4>
                                            </div>
                                            <div class="rating mb-10">
                                                <div class="product-ratings d-inline-block align-middle">
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons off">star</i></span>
                                                </div>
                                            </div>
                                            <div class="category-description">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Nam sagittis, magna et euismod auctor, mauris ipsum
                                                interdum risus, a varius augue lacus id diam. Mauris maximus, ipsum at
                                                gravida sodales, purus tellus tempor eros, a feugiat elit odio in nunc.
                                            </div>
                                            <div class="price float-left w-100">
                                                <div class="regular-price">$100.00</div>
                                                <div class="old-price">$150.00</div>
                                            </div>
                                            <ul class="countdown3 countdown">
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
                                            <div class="button-wrapper">
                                                <div class="button-group text-center">
                                                    <button type="button" class="btn btn-primary btn-cart"
                                                        data-toggle="modal" data-target="#product_view"
                                                        disabled="disabled"><i
                                                            class="material-icons">shopping_cart</i><span>Add to
                                                            cart</span></button>
                                                    <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                            class="material-icons">favorite</i><span>wishlist</span></a>
                                                    <button type="button" class="btn btn-primary btn-compare"><i
                                                            class="material-icons">equalizer</i><span>Compare</span></button>
                                                    <button type="button" class="btn btn-primary btn-quickview"
                                                        data-toggle="modal" data-target="#product_view"><i
                                                            class="material-icons">visibility</i><span>Quick
                                                            View</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
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
                                                    <h4 class="product-title text-capitalize"><a
                                                            href="product-details.html">aliquam quaerat voluptatem</a>
                                                    </h4>
                                                </div>
                                                <div class="rating">
                                                    <div class="product-ratings d-inline-block align-middle">
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                    </div>
                                                </div>
                                                <div class="price">
                                                    <div class="regular-price">$100.00</div>
                                                    <div class="old-price">$150.00</div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-group text-center">
                                                        <button type="button" class="btn btn-primary btn-cart"
                                                            data-toggle="modal" data-target="#product_view"
                                                            disabled="disabled"><i
                                                                class="material-icons">shopping_cart</i><span>Add to
                                                                cart</span></button>
                                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                                        <button type="button" class="btn btn-primary btn-quickview"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">visibility</i><span>Quick
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
                                                    <h4 class="product-title text-capitalize"><a
                                                            href="product-details.html">aspetur autodit autfugit</a>
                                                    </h4>
                                                </div>
                                                <div class="rating">
                                                    <div class="product-ratings d-inline-block align-middle">
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                    </div>
                                                </div>
                                                <div class="price">
                                                    <div class="regular-price">$100.00</div>
                                                    <div class="old-price">$150.00</div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-group text-center">
                                                        <button type="button" class="btn btn-primary btn-cart"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">shopping_cart</i><span>Add to
                                                                cart</span></button>
                                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                                        <button type="button" class="btn btn-primary btn-quickview"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">visibility</i><span>Quick
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
                                                    <h4 class="product-title text-capitalize"><a
                                                            href="product-details.html">magni dolores eosquies</a></h4>
                                                </div>
                                                <div class="rating">
                                                    <div class="product-ratings d-inline-block align-middle">
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                    </div>
                                                </div>
                                                <div class="price">
                                                    <div class="regular-price">$100.00</div>
                                                    <div class="old-price">$150.00</div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-group text-center">
                                                        <button type="button" class="btn btn-primary btn-cart"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">shopping_cart</i><span>Add to
                                                                cart</span></button>
                                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                                        <button type="button" class="btn btn-primary btn-quickview"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">visibility</i><span>Quick
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
                                                    <h4 class="product-title text-capitalize"><a
                                                            href="product-details.html">voluptas nulla pariatur</a></h4>
                                                </div>
                                                <div class="rating">
                                                    <div class="product-ratings d-inline-block align-middle">
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                    </div>
                                                </div>
                                                <div class="price">
                                                    <div class="regular-price">$100.00</div>
                                                    <div class="old-price">$150.00</div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-group text-center">
                                                        <button type="button" class="btn btn-primary btn-cart"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">shopping_cart</i><span>Add to
                                                                cart</span></button>
                                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                                        <button type="button" class="btn btn-primary btn-quickview"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">visibility</i><span>Quick
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
                                                    <h4 class="product-title text-capitalize"><a
                                                            href="product-details.html">aliquam quat voluptatem</a></h4>
                                                </div>
                                                <div class="rating">
                                                    <div class="product-ratings d-inline-block align-middle">
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                    </div>
                                                </div>
                                                <div class="price">
                                                    <div class="regular-price">$100.00</div>
                                                    <div class="old-price">$150.00</div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-group text-center">
                                                        <button type="button" class="btn btn-primary btn-cart"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">shopping_cart</i><span>Add to
                                                                cart</span></button>
                                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                                        <button type="button" class="btn btn-primary btn-quickview"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">visibility</i><span>Quick
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
                                                    <h4 class="product-title text-capitalize"><a
                                                            href="product-details.html">voluptas sit aspernatur</a></h4>
                                                </div>
                                                <div class="rating">
                                                    <div class="product-ratings d-inline-block align-middle">
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                        <span class="fa fa-stack"><i
                                                                class="material-icons off">star</i></span>
                                                    </div>
                                                </div>
                                                <div class="price">
                                                    <div class="regular-price">$100.00</div>
                                                    <div class="old-price">$150.00</div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-group text-center">
                                                        <button type="button" class="btn btn-primary btn-cart"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">shopping_cart</i><span>Add to
                                                                cart</span></button>
                                                        <a href="wishlist.html" class="btn btn-primary btn-wishlist"><i
                                                                class="material-icons">favorite</i><span>wishlist</span></a>
                                                        <button type="button" class="btn btn-primary btn-compare"><i
                                                                class="material-icons">equalizer</i><span>Compare</span></button>
                                                        <button type="button" class="btn btn-primary btn-quickview"
                                                            data-toggle="modal" data-target="#product_view"><i
                                                                class="material-icons">visibility</i><span>Quick
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
                    <div id="ttsmartblog" class="my-40 my-sm-25 bottom-to-top hb-animate-element">
                        <div class="tt-title d-inline-block float-none w-100 text-center text-capitalize">latest news
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="smartblog-content owl-carousel text-center">
                                    <div class="blog-inner">
                                        <div class="ttblog">
                                            <div class="item">
                                                <div class="ttblog_image_holder">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/banner/blog-01.jpg" alt="blog-01">
                                                    </a>
                                                    <span class="blogicons">
                                                        <a title="Click to view Full Image" href="img/banner/blog-01.jpg"
                                                            data-lightbox="example-set" class="icon zoom"><i
                                                                class="material-icons">search</i></a>
                                                    </span>
                                                </div>
                                                <div class="blog-content-wrap float-left w-100">
                                                    <div class="blog_inner">
                                                        <h4 class="blog-title"><span>Share the Love</span></h4>
                                                        <div class="blog-desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit.</div>
                                                        <div class="read-more text-capitalize">
                                                            <a title="Click to view Read More" class="readmore">read
                                                                more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ttblog">
                                            <div class="item">
                                                <div class="ttblog_image_holder">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/banner/blog-02.jpg" alt="blog-02">
                                                    </a>
                                                    <span class="blogicons">
                                                        <a title="Click to view Full Image" href="img/banner/blog-02.jpg"
                                                            data-lightbox="example-set" class="icon zoom"><i
                                                                class="material-icons">search</i></a>
                                                    </span>
                                                </div>
                                                <div class="blog-content-wrap float-left w-100">
                                                    <div class="blog_inner">
                                                        <h4 class="blog-title"><span>Upon of seasons earth</span></h4>
                                                        <div class="blog-desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit.</div>
                                                        <div class="read-more text-capitalize">
                                                            <a title="Click to view Read More" class="readmore">read
                                                                more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ttblog">
                                            <div class="item">
                                                <div class="ttblog_image_holder">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/banner/blog-03.jpg" alt="blog-03">
                                                    </a>
                                                    <span class="blogicons">
                                                        <a title="Click to view Full Image" href="img/banner/blog-03.jpg"
                                                            data-lightbox="example-set" class="icon zoom"><i
                                                                class="material-icons">search</i></a>
                                                    </span>
                                                </div>
                                                <div class="blog-content-wrap float-left w-100">
                                                    <div class="blog_inner">
                                                        <h4 class="blog-title"><span>From Now we are certified
                                                                web</span></h4>
                                                        <div class="blog-desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit.</div>
                                                        <div class="read-more text-capitalize">
                                                            <a title="Click to view Read More" class="readmore">read
                                                                more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-inner">
                                        <div class="ttblog">
                                            <div class="item">
                                                <div class="ttblog_image_holder">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/banner/blog-04.jpg" alt="blog-04">
                                                    </a>
                                                    <span class="blogicons">
                                                        <a title="Click to view Full Image" href="img/banner/blog-04.jpg"
                                                            data-lightbox="example-set" class="icon zoom"><i
                                                                class="material-icons">search</i></a>
                                                    </span>
                                                </div>
                                                <div class="blog-content-wrap float-left w-100">
                                                    <div class="blog_inner">
                                                        <h4 class="blog-title"><span>Viderer voluptatum te eum</span>
                                                        </h4>
                                                        <div class="blog-desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit.</div>
                                                        <div class="read-more text-capitalize">
                                                            <a title="Click to view Read More" class="readmore">read
                                                                more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ttblog">
                                            <div class="item">
                                                <div class="ttblog_image_holder">
                                                    <a href="#">
                                                        <img src="../../../../assets/img/banner/blog-05.jpg" alt="blog-05">
                                                    </a>
                                                    <span class="blogicons">
                                                        <a title="Click to view Full Image" href="img/banner/blog-05.jpg"
                                                            data-lightbox="example-set" class="icon zoom"><i
                                                                class="material-icons">search</i></a>
                                                    </span>
                                                </div>
                                                <div class="blog-content-wrap float-left w-100">
                                                    <div class="blog_inner">
                                                        <h4 class="blog-title"><span>Share the Love</span></h4>
                                                        <div class="blog-desc">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit.</div>
                                                        <div class="read-more text-capitalize">
                                                            <a title="Click to view Read More" class="readmore">read
                                                                more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ttbrandlogo" class="my-40 my-sm-25 bottom-to-top hb-animate-element">
                        <div class="container">
                            <div class="tt-brand owl-carousel">
                                <div class="item">
                                    <a href="#"><img src="../../../../assets/img/logos/brand-logo-01.png"
                                            alt="brand-logo-01"></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="../../../../assets/img/logos/brand-logo-02.png"
                                            alt="brand-logo-02"></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="../../../../assets/img/logos/brand-logo-03.png"
                                            alt="brand-logo-03"></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="../../../../assets/img/logos/brand-logo-04.png"
                                            alt="brand-logo-04"></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="../../../../assets/img/logos/brand-logo-05.png"
                                            alt="brand-logo-05"></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img src="../../../../assets/img/logos/brand-logo-06.png"
                                            alt="brand-logo-06"></a>
                            </div>
                            <div class="item">
                                <a href="#"><img src="../../../../assets/img/logos/brand-logo-07.png"
                                        alt="brand-logo-07"></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</main></template>