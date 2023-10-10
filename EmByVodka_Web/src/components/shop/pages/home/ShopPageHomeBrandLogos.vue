<script>
import { onMounted } from 'vue'
import { owlCarouselBrandLogos } from '../../../../assets/legacy/vendor-template'

export default {
    name: 'ShopPageHomeBrandLogos',
    setup() {
        onMounted(() => {
            owlCarouselBrandLogos();
        })
    }
}
</script>

<template>
    <div id="ttbrandlogo" class="my-40 my-sm-25 bottom-to-top hb-animate-element">
        <div class="container">
            <div class="tt-brand owl-carousel">
                <div class="item" v-for="i in 7" :key="i">
                    <a><img :src="require('../../../../assets/img/logos/brand-logo-0' + i + '.png')"></a>
                </div>
            </div>
        </div>
    </div>
</template>