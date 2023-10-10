<script>
import CommonPagination from '../../../@common/CommonPagination'
import ShopProductLayout from '../../product/ShopProductLayout'
import ShopProductLayoutDetails from '../../product/ShopProductLayoutDetails'
import ShopPageCategoriesHeader from './ShopPageCategoriesHeader'
export default {
    name: 'ShopPageCategoriesProducts',
    components: {
        CommonPagination,
        ShopPageCategoriesHeader,
        ShopProductLayout,
        ShopProductLayoutDetails
    },
    setup() {
        const products = searchProducts();
        return { products }
    }
}

function searchProducts() {
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
            rating: 3,
            colors: ['green', '#11426b', '#7d5a3c', '#ffffff'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
            rating: 4,
            colors: ['#7d5a3c', '#ffffff', 'green', '#11426b'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
            rating: 3,
            colors: ['#11426b', '#7d5a3c', 'green', '#ffffff'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
            rating: 4,
            colors: ['#ffffff', 'green', '#11426b', '#7d5a3c'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
            rating: 5,
            colors: ['#7d5a3c', 'green', '#11426b', '#ffffff'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
            rating: 4,
            colors: ['green', '#11426b', '#7d5a3c', '#ffffff'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 7,
            name: 'aspetur autodit autfugit',
            imageUrls: [
                require('../../../../assets/img/products/07.jpg'),
                require('../../../../assets/img/products/08.jpg'),
                require('../../../../assets/img/products/09.jpg'),
                require('../../../../assets/img/products/10.jpg'),
                require('../../../../assets/img/products/01.jpg')
            ],
            price: 75,
            salePrice: 60,
            rating: 4,
            colors: ['#7d5a3c', '#ffffff', 'green', '#11426b'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 8,
            name: 'aliquam quat voluptatem',
            imageUrls: [
                require('../../../../assets/img/products/08.jpg'),
                require('../../../../assets/img/products/09.jpg'),
                require('../../../../assets/img/products/10.jpg'),
                require('../../../../assets/img/products/02.jpg'),
                require('../../../../assets/img/products/01.jpg')
            ],
            price: 175,
            salePrice: 160,
            rating: 5,
            colors: ['#11426b', '#7d5a3c', '#ffffff', 'green'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id: 9,
            name: 'magni dolores eosquies',
            imageUrls: [
                require('../../../../assets/img/products/09.jpg'),
                require('../../../../assets/img/products/10.jpg'),
                require('../../../../assets/img/products/04.jpg'),
                require('../../../../assets/img/products/05.jpg'),
                require('../../../../assets/img/products/06.jpg')
            ],
            price: 80,
            salePrice: 55,
            rating: 2,
            colors: ['green', '#11426b', '#7d5a3c', '#ffffff'],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];
}
</script>
<template>
    <ShopPageCategoriesHeader />
    <div class="tab-content text-center products w-100 float-left">
        <div class="tab-pane grid fade active" id="grid" role="tabpanel">
            <div class="row">
                <ShopProductLayout v-for="p in products" :key="p.id" :product="p"
                    class="col-lg-3 col-md-3 col-sm-6 col-xs-6" />
            </div>

        </div>
        <div class="tab-pane fade list text-left" id="list" role="tabpanel">
            <ShopProductLayoutDetails v-for="p in products" :key="p.id" :product="p" />
        </div>
    </div>
    <CommonPagination />
</template>