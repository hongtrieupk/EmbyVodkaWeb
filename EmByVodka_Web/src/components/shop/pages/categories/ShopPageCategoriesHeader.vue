<script>
export default {
    name: 'ShopPageCategoriesHeader'
}
</script>
<template>
    <header class="product-grid-header d-flex d-xs-block d-sm-flex d-lg-flex w-100 float-left">
        <div
            class="hidden-sm-down total-products d-flex d-xs-block d-lg-flex col-md-3 col-sm-3 col-xs-12 align-items-center">
            <div class="row">
                <div class="nav" role="tablist">
                    <a class="grid active" href="#grid" data-toggle="tab" role="tab" aria-selected="true"
                        aria-controls="grid"><i class="material-icons align-middle">grid_on</i></a>
                    <a class="list" href="#list" data-toggle="tab" role="tab" aria-selected="false" aria-controls="list"><i
                            class="material-icons align-middle">format_list_bulleted</i></a>
                </div>
            </div>
        </div>
        <div
            class="shop-results-wrapper d-flex d-sm-flex d-xs-block d-lg-flex justify-content-end col-md-9 col-sm-9 col-xs-12">
            <div class="shop-results d-flex align-items-center"><span>Show</span>
                <div class="shop-select">
                    <select disabled name="number" id="number">
                        <option value="9">9</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <div class="shop-results d-flex align-items-center"><span>Sort By</span>
                <div class="shop-select">
                    <select disabled name="sort" id="sort">
                        <option value="position">Default sorting</option>
                        <option value="p-name">Sort Product Name</option>
                        <option value="p-price">Sort Price</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
</template>