<script>
import ShopPageCategoriesBanner from './ShopPageCategoriesBanner'
import ShopPageCategoriesProducts from './ShopPageCategoriesProducts'
export default {
    name: 'ShopPageCategoriesContents',
    components: {
        ShopPageCategoriesBanner,
        ShopPageCategoriesProducts
    }
}
</script>
<template>
    <div class="content-wrapper col-xl-9 col-lg-9 order-lg-2">
        <ShopPageCategoriesBanner />
        <ShopPageCategoriesProducts />
    </div>
</template>