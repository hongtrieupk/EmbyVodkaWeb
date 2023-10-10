<script>
export default {
    name: 'ShopPageHomeAbout'
}
</script>

<template>
    <div id="ttcmsaboutus" class="ttaboutus my-40 my-sm-25">
        <div class="container">
            <div class="ttcmsaboutus ttabout d-lg-flex d-md-flex d-sm-flex d-xs-block align-items-center">
                <div class="ttcmsabout-img col-sm-6 col-xs-12 float-left left-to-right hb-animate-element">
                    <div class="ttimage">
                        <a><img src="../../../../assets/img/banner/cms-aboutus.jpg" alt="banner_1"></a>
                    </div>
                </div>
                <div class="ttcmsabout-desc col-sm-6 col-xs-12 float-left right-to-left hb-animate-element">
                    <div class="ttabout-title text-capitalize font-italic mb-30 position-relative">Women's
                        Fashion</div>
                    <div class="ttabout-subtitle text-uppercase position-relative mb-30">Get Started with Decor.
                    </div>
                    <div class="ttabout-desc mb-40">Duis faucibus enim vitae nunc molestie, nec facilisis arcu
                        pulvinar. Nullam mattis arcu convallis, bibendum dui ac, laoreet est. Vivamus interdum
                        earcu convallis, bibendum dui ac, laoreet est.</div>
                    <div class="ttbtn"><router-link to="/products"><a class="btn-primary text-capitalize">go,shop</a></router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>