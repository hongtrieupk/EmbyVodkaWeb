<script>
import CommonPagination from '../../../@common/CommonPagination'
import ShopPageCategoriesHeader from './ShopPageCategoriesHeader'
export default {
    name: 'ShopPageCategoriesProducts',
    components: {
        CommonPagination,
        ShopPageCategoriesHeader
    }
}
</script>
<template>
    <ShopPageCategoriesHeader />
    <div class="tab-content text-center products w-100 float-left">
        <div class="tab-pane grid fade active" id="grid" role="tabpanel">
            <div class="row">
                <div class="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <div class="product-thumb">
                        <div class="image zoom">
                            
                            <a href="product-details.html">
                                <img src="../../../../assets/img/products/01.jpg" alt="01" />
                                <img src="../../../../assets/img/products/02.jpg" alt="02"
                                    class="second_image img-responsive" /> </a>
                        </div>
                        <div class="thumb-description">
                            <div class="caption">
                                <h4 class="product-title text-capitalize"><a href="product-details.html">aliquam quaerat
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
                                    <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                        data-toggle="modal" disabled><i class="material-icons">shopping_cart</i><span>Out of
                                            stock</span></button>
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
        <div class="tab-pane fade list text-left" id="list" role="tabpanel">
            <div class="product-layouts">
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/01.jpg" alt="01" />
                            <img src="../../../../assets/img/products/02.jpg" alt="02"
                                class="second_image img-responsive" />
                        </a>
                        <ul class="countdown countdown4 text-center">
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
                    <div class="thumb-description col-xs-12 col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">aliquam
                                    quaerat voluptatem</a></h4>
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

                        <div class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus arcu
                            turpis, quis sagittis orci dictum non. Etiam id eleifend erat. Donec sit
                            amet nisl id nisi laoreet viverra in ac nibh. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="color-option d-flex align-items-center float-left w-100">
                            <ul class="color-categories">
                                <li>
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
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal" disabled="disabled"><i
                                        class="material-icons">shopping_cart</i><span>out of
                                        stock</span></button>
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/02.jpg" alt="02" />
                            <img src="../../../../assets/img/products/03.jpg" alt="03"
                                class="second_image img-responsive" /></a>
                        <ul class="countdown countdown5 text-center">
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
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">aspetur
                                    autodit autfugit</a></h4>
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
                        <div class="description">
                            Integer erat purus, semper pharetra leo tincidunt, commodo vestibulum nulla.
                            Nam ultricies nisl sed maximus rhoncus. Aliquam et ipsum pulvinar, rutrum
                            erat nec, aliquet nisl. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal"><i class="material-icons">shopping_cart</i><span>Add to
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/03.jpg" alt="03" />
                            <img src="../../../../assets/img/products/04.jpg" alt="04"
                                class="second_image img-responsive" />
                        </a>
                    </div>
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">magni
                                    dolores eosquies</a></h4>
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
                        <div class="description">
                            Suspendisse eu mi ullamcorper, volutpat leo at, consectetur arcu. Morbi eget
                            tempor sem, sed auctor sem. Nullam sodales scelerisque nisi, eu pellentesque
                            felis euismod malesuada. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal"><i class="material-icons">shopping_cart</i><span>Add to
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/04.jpg" alt="04" />
                            <img src="../../../../assets/img/products/05.jpg" alt="05"
                                class="second_image img-responsive" />
                        </a>
                    </div>
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">voluptas nulla
                                    pariatur</a></h4>
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
                        <div class="description">
                            Phasellus euismod nulla nulla, sit amet tristique tellus condimentum ut.
                            Aenean posuere lacus eu ultrices lobortis. Duis eget est arcu. Praesent
                            rhoncus efficitur augue nec porttitor. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal"><i class="material-icons">shopping_cart</i><span>Add to
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/05.jpg" alt="05" />
                            <img src="../../../../assets/img/products/06.jpg" alt="06"
                                class="second_image img-responsive" />
                        </a>
                    </div>
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">aliquam
                                    quat voluptatem</a></h4>
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
                        <div class="description">
                            Sed nisi elit, gravida eu risus sit amet, hendrerit tristique sapien. Proin
                            consequat augue lectus, eu tempor orci congue quis. Sed dapibus non enim sed
                            tristique. Donec commodo velit at odio gravida. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal"><i class="material-icons">shopping_cart</i><span>Add to
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/06.jpg" alt="06" />
                            <img src="../../../../assets/img/products/07.jpg" alt="07"
                                class="second_image img-responsive" />
                        </a>
                    </div>
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">voluptas sit
                                    aspernatur</a></h4>
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
                        <div class="description">
                            Vestibulum semper tincidunt eros, ut pulvinar felis. Maecenas tincidunt mi
                            et dui dignissim, in feugiat nisl scelerisque. Aenean et nisi turpis. Cras
                            in nisi vitae magna feugiat placerat id sit amet mauris. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal"><i class="material-icons">shopping_cart</i><span>Add to
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/07.jpg" alt="07" />
                            <img src="../../../../assets/img/products/08.jpg" alt="08"
                                class="second_image img-responsive" />
                        </a>
                    </div>
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">similique suntin
                                    culpaqui</a></h4>
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
                        <div class="description">
                            Phasellus ut felis eu libero semper elementum. Maecenas sit amet scelerisque
                            ante. Nam ultrices enim sed lacus gravida condimentum. Proin at malesuada
                            nibh. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal" disabled="disabled"><i
                                        class="material-icons">shopping_cart</i><span>out of
                                        stock</span></button>
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
                <div class="product-thumb row">
                    <div class="image zoom col-xs-12 col-sm-5 col-md-4">
                        <a href="product-details.html" class="d-block position-relative">
                            <img src="../../../../assets/img/products/08.jpg" alt="08" />
                            <img src="../../../../assets/img/products/09.jpg" alt="09"
                                class="second_image img-responsive" />
                        </a>
                    </div>
                    <div class="thumb-description col-xs-12  col-sm-7 col-md-8 position-static text-left">
                        <div class="caption">
                            <h4 class="product-title text-capitalize"><a href="product-details.html">suscipit laboriosam
                                    nisi</a></h4>
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
                        <div class="description">
                            Duis tincidunt ante urna, sit amet vestibulum felis placerat in. Duis a
                            tortor et odio consequat congue. Mauris euismod augue tempor, sagittis nisl
                            sed, pretium purus. </div>

                        <div class="price">
                            <div class="regular-price">$100.00</div>
                            <div class="old-price">$150.00</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button-group text-center">
                                <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop"
                                    data-toggle="modal"><i class="material-icons">shopping_cart</i><span>Add to
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
    <CommonPagination />
</template>