<script>
import ShopPageHomeSlider from './ShopPageHomeSlider'
import ShopPageHomeAbout from './ShopPageHomeAbout'
import ShopPageHomeTrendingProducts from './ShopPageHomeTrendingProducts'
import ShopPageHomeSaleInfo from './ShopPageHomeSaleInfo'
import ShopPageHomeSpecialProducts from './ShopPageHomeSpecialProducts'
import ShopPageHomeBlogs from './ShopPageHomeBlogs'

export default {
    name: 'ShopPageHome',
    components: {
        ShopPageHomeSlider,
        ShopPageHomeAbout,
        ShopPageHomeTrendingProducts,
        ShopPageHomeSaleInfo,
        ShopPageHomeSpecialProducts,
        ShopPageHomeBlogs
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
                <ShopPageHomeSaleInfo />
                <div id="ttlookbook" class="ttlook my-40 bottom-to-top hb-animate-element float-left w-100">
                    <ShopPageHomeSpecialProducts/>
                    <ShopPageHomeBlogs />
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