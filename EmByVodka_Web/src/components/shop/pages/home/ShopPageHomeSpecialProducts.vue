<script>
import { onMounted } from 'vue'
import { owlCarouselHomeSpecialProducts } from '../../../../assets/legacy/vendor-template'
import { fetchSpecialProducts } from '../../../../services/product-service'
import ShopProductLayout from '../../product/ShopProductLayout'

export default {
    name: 'ShopPageHomeSpecialProducts',
    components: {
        ShopProductLayout
    },
    setup() {
        onMounted(() => {
            owlCarouselHomeSpecialProducts();
        })

        return {
            specialProducts: fetchSpecialProducts()
        }
    }
}

</script>

<template>
    <div id="ttspecial" class="ttspecial my-40 bottom-to-top hb-animate-element">
        <div class="container">
            <div class="row">
                <div class="tt-title d-inline-block float-none w-100 text-center">special products</div>
                <div class="ttspecial-content products grid owl-carousel">
                    <ShopProductLayout v-for="product in specialProducts" :key="product.id" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>