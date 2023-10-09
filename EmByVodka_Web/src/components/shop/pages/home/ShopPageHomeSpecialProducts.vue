<script>
import { onMounted } from 'vue'
import { owlCarouselHomeSpecialProducts } from '../../../../assets/legacy/vendor-template'

import ShopProductLayout from '../../product/ShopProductLayout'

export default {
    name: 'ShopPageHomeSpecialProducts',
    components: {
        ShopProductLayout
    },
    setup() {
        const specialProducts = fetchSpecialProducts();
        onMounted(() => {
            owlCarouselHomeSpecialProducts();
        })

        return {
            specialProducts
        }
    }
}
function fetchSpecialProducts() {
    return [
        {
            id: 1,
            name: 'aliquam quat voluptatem',
            imageUrls: [
                require('../../../../assets/img/products/01.jpg'),
                require('../../../../assets/img/products/02.jpg'),
                require('../../../../assets/img/products/03.jpg'),
                require('../../../../assets/img/products/04.jpg'),
                require('../../../../assets/img/products/05.jpg')
            ],
            price: 150,
            salePrice: 100,
            rating: 3
        },
        {
            id: 2,
            name: 'aspetur autodit autfugit',
            imageUrls: [
                require('../../../../assets/img/products/02.jpg'),
                require('../../../../assets/img/products/03.jpg'),
                require('../../../../assets/img/products/04.jpg'),
                require('../../../../assets/img/products/05.jpg'),
                require('../../../../assets/img/products/01.jpg')
            ],
            price: 150,
            salePrice: 100,
            rating: 4
        },
        {
            id: 3,
            name: 'magni dolores eosquies',
            imageUrls: [
                require('../../../../assets/img/products/03.jpg'),
                require('../../../../assets/img/products/04.jpg'),
                require('../../../../assets/img/products/05.jpg'),
                require('../../../../assets/img/products/01.jpg'),
                require('../../../../assets/img/products/02.jpg')
            ],
            price: 150,
            salePrice: 100,
            rating: 3
        },
        {
            id: 4,
            name: 'voluptas nulla pariatur',
            imageUrls: [
                require('../../../../assets/img/products/04.jpg'),
                require('../../../../assets/img/products/05.jpg'),
                require('../../../../assets/img/products/01.jpg'),
                require('../../../../assets/img/products/02.jpg'),
                require('../../../../assets/img/products/03.jpg')
            ],
            price: 150,
            salePrice: 100,
            rating: 4
        },
        {
            id: 5,
            name: 'aliquam quat voluptatem',
            imageUrls: [
                require('../../../../assets/img/products/05.jpg'),
                require('../../../../assets/img/products/06.jpg'),
                require('../../../../assets/img/products/02.jpg'),
                require('../../../../assets/img/products/03.jpg'),
                require('../../../../assets/img/products/04.jpg')
            ],
            price: 150,
            salePrice: 100,
            rating: 5
        },
        {
            id: 6,
            name: 'voluptas sit aspernatur',
            imageUrls: [
                require('../../../../assets/img/products/06.jpg'),
                require('../../../../assets/img/products/07.jpg'),
                require('../../../../assets/img/products/02.jpg'),
                require('../../../../assets/img/products/03.jpg'),
                require('../../../../assets/img/products/04.jpg')
            ],
            price: 150,
            salePrice: 100,
            rating: 4
        }
    ];
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