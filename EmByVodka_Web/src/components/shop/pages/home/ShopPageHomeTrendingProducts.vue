<script>
import { onMounted } from 'vue'
import { initTabsForTrendingProducts } from '../../../../assets/legacy/vendor-template'
import { fetchTrendingProduct } from '../../../../services/product-service'
import ShopProductLayout from '../../product/ShopProductLayout'

export default {
    name: 'ShopPageHomeTrendingProducts',
    components: { ShopProductLayout },
    setup() {
        onMounted(() => {
            initTabsForTrendingProducts();
        });
        const trendingProducts = fetchTrendingProduct();
        return {
            featuredProducts: trendingProducts.featuredProducts,
            latestProducts: trendingProducts.latestProducts,
            bestSellerProducts: trendingProducts.bestSellerProducts
        }
    }
}
</script>

<template>
    <div id="hometab" class="home-tab my-40 my-sm-25 bottom-to-top hb-animate-element">
        <div class="container">
            <div class="row">
                <div class="tt-title d-inline-block float-none w-100 text-center">Trending Products</div>
                <div class="tabs">
                    <ul class="nav nav-tabs justify-content-center">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#ttfeatured-main"
                                id="featured-tab">
                                <div class="tab-title">Featured</div>
                            </a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ttnew-main" id="new-tab">
                                <div class="tab-title">Latest</div>
                            </a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ttbestseller-main"
                                id="bestseller-tab">
                                <div class="tab-title">Bestseller</div>
                            </a></li>
                    </ul>
                </div>
                <div class="tab-content float-left w-100">
                    <div class="tab-pane active float-left w-100" id="ttfeatured-main" role="tabpanel"
                        aria-labelledby="featured-tab">
                        <section id="ttfeatured" class="ttfeatured-products">
                            <div class="ttfeatured-content products grid owl-carousel" id="owl1">
                                <ShopProductLayout v-for="product in featuredProducts" :key="product.id"
                                    :product="product" />
                            </div>
                        </section>
                    </div>
                    <div class="tab-pane float-left w-100" id="ttnew-main" role="tabpanel" aria-labelledby="new-tab">
                        <section id="ttnew" class="ttnew-products">
                            <div class="ttnew-content products grid owl-carousel" id="owl2">
                                <ShopProductLayout v-for="product in latestProducts" :key="product.id" :product="product" />
                            </div>
                        </section>
                    </div>
                    <div class="tab-pane float-left w-100" id="ttbestseller-main" role="tabpanel"
                        aria-labelledby="bestseller-tab">
                        <section id="ttbestseller" class="ttbestseller-products">
                            <div class="ttbestseller-content products grid owl-carousel" id="owl3">
                                <ShopProductLayout v-for="product in bestSellerProducts" :key="product.id"
                                    :product="product" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>