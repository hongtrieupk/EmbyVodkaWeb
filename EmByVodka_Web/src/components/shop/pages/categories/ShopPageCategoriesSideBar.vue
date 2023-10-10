<script>
import { ref } from 'vue'
export default {
    name: 'ShopPageCategoriesSideBar',
    setup() {
        const productColors = ref(getProductColors());
        const productSizes = ref(getProductSizes());
        return { productColors, productSizes }
    }
}

function getProductColors() {
    return [
        {
            cssColor: 'green',
            title: 'Green'
        },
        {
            cssColor: '#11426b',
            title: 'Blue'
        },
        {
            cssColor: '#7d5a3c',
            title: 'Brown'
        },
        {
            cssColor: '#ffffff',
            title: 'White'
        }
    ];
}

function getProductSizes() {
    return [ 'XS', 'S', 'M', 'L' ];
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
                            <div class="sidebar-widget-option" v-for="color in productColors" :key="color.cssColor">
                                <a :style="{'background-color': color.cssColor}"></a>
                                {{color.title}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebar-block size">
                    <h3 class="widget-title"><a data-toggle="collapse" href="#size" role="button" aria-expanded="true"
                            aria-controls="size">Size</a></h3>
                    <div id="size" class="sidebar-widget-option-wrapper collapse show">
                        <div class="size-inner">
                            <div class="sidebar-widget-option" v-for="size in productSizes" :key="size">
                                <input type="checkbox" :id="size" checked disabled>
                                <label for="size-1">{{ size }}</label>
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