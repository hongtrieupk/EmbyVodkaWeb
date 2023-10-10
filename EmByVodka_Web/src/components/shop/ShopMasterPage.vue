<script>
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'theia-sticky-sidebar'
import 'masonry-layout/dist/masonry.pkgd'
import '../../assets/legacy/inview'

import { onMounted } from 'vue'
import { initializeWindowEvent, initializePage } from '../../assets/legacy/vendor-template'

import ShopLayoutHeader from './layout/ShopLayoutHeader'
import ShopLayoutCookieAlert from './layout/ShopLayoutCookieAlert'
import ShopLayoutFooter from './layout/ShopLayoutFooter'
import ShopProductModal from './product/ShopProductModal'

export default {
    name: 'App',
    components: {
        ShopLayoutHeader,
        ShopLayoutCookieAlert,
        ShopLayoutFooter,
        ShopProductModal
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
    <ShopProductModal />
</template>