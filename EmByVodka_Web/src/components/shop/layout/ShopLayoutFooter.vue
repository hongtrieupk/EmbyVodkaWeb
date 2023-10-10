<script>
export default {
    name: 'ShopLayoutFooter'
}
</script>

<template>
    <footer class="page-footer font-small footer1">
        <div class="container text-center text-md-left">
            <div class="row">
                <div class="col-md-4 footer-column">
                    <div class="title">
                        <a href="#information" class="font-weight-normal text-capitalize mb-10" data-toggle="collapse"
                            aria-expanded="false">store information</a>
                    </div>
                    <ul id="information" class="list-unstyled collapse">
                        <li class="contact-detail links">
                            <span class="address">
                                <span class="icon"><i class="material-icons">location_on</i></span>
                                <span class="data"> Son Ky 1 Apartment, CN13 Street, Son Ky Ward, Tan Phu District, HCM
                                    City, Viet Nam</span> </span>
                        </li>
                        <li class="links">
                            <span class="contact">
                                <span class="icon"><i class="material-icons">phone</i></span>
                                <span class="data"><a href="tel:(99)55669999">+ (84) 399990357</a></span> </span>
                        </li>
                        <li class="links">
                            <span class="email">
                                <span class="icon"><i class="material-icons">email</i></span>
                                <span class="data"><a href="mailto:demo.store@gmail.com">embyvodka@gmail.com</a></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 footer-column">
                    <div class="title">
                        <a href="#company" class="font-weight-normal text-capitalize mb-10" data-toggle="collapse"
                            aria-expanded="false">company</a>
                    </div>
                    <ul id="company" class="list-unstyled collapse">
                        <li>
                            <a>search</a>
                        </li>
                        <li>
                            <a>New Products</a>
                        </li>
                        <li>
                            <router-link to="/products"><a>Best Collection</a></router-link>
                        </li>
                        <li>
                            <a>wishlist</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 footer-column">
                    <div class="title">
                        <a href="#products" class="font-weight-normal text-capitalize mb-10" data-toggle="collapse"
                            aria-expanded="false">products</a>
                    </div>
                    <ul id="products" class="list-unstyled collapse">
                        <li>
                            <a>blog</a>
                        </li>
                        <li>
                            <router-link to="/about-us"><a>about us</a></router-link>
                        </li>
                        <li>
                            <router-link to="/contact-us"><a>contact us</a></router-link>
                        </li>
                        <li>
                            <a>my account</a>
                        </li>
                    </ul>

                </div>

                <div class="col-md-4 footer-column newsletter">
                    <div class="block-newsletter">
                        <div class="title">
                            <a class="font-weight-normal text-capitalize mb-10">Sign Up For Newsletter</a>
                        </div>
                        <div class="block-content">
                            <div class="footer-desc">Sign up to our newsletter to get the latest articles, lookbooks,
                                street style &amp; fashion voucher.</div>
                            <form method="post">
                                <div class="input-group">
                                    <input type="email" name="email" value="" placeholder="Email address.." required=""
                                        class="form-control">
                                    <span class="input-group-btn">
                                        <button class="btn btn-theme text-uppercase btn-primary"
                                            type="submit">Subscribe</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div id="ttcmsfooterservice" class="col-sm-12 links">
            <div class="container">
                <div class="ttcmsservices owl-carousel">
                    <div class="ttservice col-sm-4 d-md-flex align-items-center">
                        <div class="icon">
                            <div class="ttgift_img service-icon"><img src="../../../assets/img/logos/icon1_small.png"
                                    alt="icon1_small" />
                            </div>
                        </div>
                        <div class="service-content text-md-left">
                            <div class="service-title">Free Shipping item</div>
                            <div class="service-desc">Proin gravida nibh vel velit auctor.</div>
                        </div>
                    </div>
                    <div class="ttservice col-sm-4 d-md-flex align-items-center">
                        <div class="icon">
                            <div class="ttdisc_img service-icon"><img src="../../../assets/img/logos/icon2_small.png"
                                    alt="icon2_small" />
                            </div>
                        </div>
                        <div class="service-content text-md-left">
                            <div class="service-title">Secured Payment</div>
                            <div class="service-desc">Proin gravida nibh vel velit auctor.</div>
                        </div>
                    </div>
                    <div class="ttservice col-sm-4 d-md-flex align-items-center">
                        <div class="icon">
                            <div class="ttshipping_img service-icon"><img src="../../../assets/img/logos/icon3_small.png"
                                    alt="icon3_small" /></div>
                        </div>
                        <div class="service-content text-md-left">
                            <div class="service-title">Money Back Guarantee</div>
                            <div class="service-desc">Proin gravida nibh vel velit auctor.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a id="goToTop" title="Back to top" class="btn-primary"><i class="material-icons arrow-up">keyboard_arrow_up</i></a>


    </footer>
</template>
