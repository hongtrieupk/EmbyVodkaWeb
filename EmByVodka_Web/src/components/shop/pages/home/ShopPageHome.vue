<script>
import ShopPageHomeSlider from './ShopPageHomeSlider'
import ShopPageHomeAbout from './ShopPageHomeAbout'
import ShopPageHomeTrendingProducts from './ShopPageHomeTrendingProducts'
import ShopPageHomeSaleInfo from './ShopPageHomeSaleInfo'
import ShopPageHomeSpecialProducts from './ShopPageHomeSpecialProducts'
import ShopPageHomeBlogs from './ShopPageHomeBlogs'
import ShopPageHomeBrandLogos from './ShopPageHomeBrandLogos'

export default {
    name: 'ShopPageHome',
    components: {
        ShopPageHomeSlider,
        ShopPageHomeAbout,
        ShopPageHomeTrendingProducts,
        ShopPageHomeSaleInfo,
        ShopPageHomeSpecialProducts,
        ShopPageHomeBlogs,
        ShopPageHomeBrandLogos
    }
}
</script>

<template>
    <main class="layout3">
        <ShopPageHomeSlider />
        <div class="main-content">
            <ShopPageHomeAbout />
            <div id="main">
                <ShopPageHomeTrendingProducts />
                <ShopPageHomeSaleInfo />
                <div id="ttlookbook" class="ttlook my-40 bottom-to-top hb-animate-element float-left w-100">
                    <ShopPageHomeSpecialProducts />
                    <ShopPageHomeBlogs />
                    <ShopPageHomeBrandLogos />
                </div>
            </div>
        </div>
    </main>
</template>