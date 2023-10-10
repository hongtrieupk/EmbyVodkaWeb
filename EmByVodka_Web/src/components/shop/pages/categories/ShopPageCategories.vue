<script>
import ShopPageCategoriesSideBar from './ShopPageCategoriesSideBar'
import ShopPageCategoriesContents from './ShopPageCategoriesContents'
export default {
    name: 'ShopPageCategories',
    components: {
        ShopPageCategoriesSideBar,
        ShopPageCategoriesContents
    }
}
</script>
<template>
    <div class="main-content w-100 float-left">
        <div class="container">
            <div class="row">
                <ShopPageCategoriesContents />
                <ShopPageCategoriesSideBar />
            </div>
        </div>
    </div>
</template>