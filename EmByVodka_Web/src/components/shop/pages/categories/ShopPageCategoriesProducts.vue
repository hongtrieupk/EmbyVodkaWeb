<script>
import { searchProducts } from '../../../../services/product-service'
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
        return { products: searchProducts() }
    }
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