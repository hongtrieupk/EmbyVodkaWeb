<script>
import { onMounted } from 'vue'
import { owlCarouselHomeSlider } from '../../../../assets/legacy/vendor-template'
export default {
    name: 'ShopPageHomeSlider',
    setup() {
        onMounted(() => {
            console.log('fffff');
            owlCarouselHomeSlider();
        })
    }
}
</script>

<template>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="slider-wrapper my-40 my-sm-25 float-left w-100">
            <div class="slider slider-for owl-carousel">
                <div>
                    <a href="#">
                        <img src="../../../../assets/img/slider/sample-04.jpg" alt="" />
                    </a>
                    <div class="slider-content-wrap center effect_top">
                        <div class="slider-title mb-20 text-capitalize float-left w-100">our specials</div>
                        <div class="slider-subtitle mb-50 text-capitalize float-left w-100">fashion trend</div>
                        <div class="slider-button text-uppercase float-left w-100"><a href=" #">Shop Now</a></div>
                    </div>
                </div>
                <div>
                    <a href="#">
                        <img src="../../../../assets/img/slider/sample-05.jpg" alt="" />
                    </a>
                    <div class="slider-content-wrap center effect_bottom">
                        <div class="slider-title mb-20 text-capitalize float-left w-100">about us</div>
                        <div class="slider-subtitle mb-50 text-capitalize float-left w-100">fashion style</div>
                        <div class="slider-button text-uppercase float-left w-100"><a href=" #">Shop Now</a></div>
                    </div>
                </div>
            </div>
        </div>
</template>