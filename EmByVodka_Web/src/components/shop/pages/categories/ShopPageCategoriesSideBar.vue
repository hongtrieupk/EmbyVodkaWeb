<script>
export default {
    name: 'ShopPageCategoriesSideBar'
}
</script>
<style scoped>
.sidebar-widget-option input[type="checkbox"] {
    margin-right: 5px;
    margin-bottom: 2px;
}
</style>
<template>
    <div class="left-column sidebar col-xl-3 col-lg-3 order-lg-1">
        <div class="sidebar-filter left-sidebar w-100 float-left">
            <div class="title">
                <a data-toggle="collapse" href="#sidebar-main" aria-expanded="false" aria-controls="sidebar-main"
                    class="d-lg-none block-toggler">Product Categories</a>
            </div>
            <div id="sidebar-main" class="sidebar-main collapse">
                <div class="sidebar-block categories">
                    <h3 class="widget-title"><a data-toggle="collapse" href="#categoriesMenu" role="button"
                            aria-expanded="true" aria-controls="categoriesMenu">Categories</a></h3>
                    <div id="categoriesMenu" class="expand-lg collapse show">
                        <div class="nav nav-pills flex-column mt-4">
                            <a class="nav-link d-flex justify-content-between mb-2 "><span>T-Shirt</span></a>
                            <a class="nav-link d-flex justify-content-between mb-2 active"><span>Dress</span></a>
                            <a class="nav-link d-flex justify-content-between mb-2 active"><span>Jean</span></a>
                            <a class="nav-link d-flex justify-content-between mb-2 active"><span>Coats & Jackets</span></a>
                        </div>
                    </div>
                </div>
                <div class="sidebar-block color">
                    <h3 class="widget-title"><a data-toggle="collapse" href="#color" role="button" aria-expanded="true"
                            aria-controls="color">Color</a></h3>
                    <div id="color" class="sidebar-widget-option-wrapper collapse show">
                        <div class="color-inner">
                            <div class="sidebar-widget-option">
                                <a style="background-color: green;"></a>
                                Green
                            </div>
                            <div class="sidebar-widget-option">
                                <a style="background-color: #11426b;"></a>
                                Blue
                            </div>
                            <div class="sidebar-widget-option">
                                <a style="background-color: #7d5a3c;"></a>
                                Brown
                            </div>
                            <div class="sidebar-widget-option">
                                <a style="background-color: #ffffff;"></a>
                                White
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebar-block size">
                    <h3 class="widget-title"><a data-toggle="collapse" href="#size" role="button" aria-expanded="true"
                            aria-controls="size">Size</a></h3>
                    <div id="size" class="sidebar-widget-option-wrapper collapse show">
                        <div class="size-inner">
                            <div class="sidebar-widget-option">
                                <input type="checkbox" id="size-1" checked>
                                <label for="size-1">L <span>(4)</span></label>
                            </div>
                            <div class="sidebar-widget-option">
                                <input type="checkbox" id="size-2" checked>
                                <label for="size-2">XS <span>(3)</span></label>
                            </div>
                            <div class="sidebar-widget-option">
                                <input type="checkbox" id="size-3" checked>
                                <label for="size-3">S <span>(3)</span></label>
                            </div>
                            <div class="sidebar-widget-option">
                                <input type="checkbox" id="size-4" checked>
                                <label for="size-4">Xl <span>(3)</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-left-banner left-sidebar w-100 float-left">
            <div class="ttleftbanner">
                <a>
                    <img src="../../../../assets/img/banner/left-banner.jpg" alt="left-banner" />
                </a>
            </div>
        </div>
    </div>
</template>