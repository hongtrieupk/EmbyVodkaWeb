<script>
import { onMounted, ref } from 'vue'
import { owlCarouselHomeBlogs } from '../../../../assets/legacy/vendor-template'

export default {
    name: 'ShopPageHomeBlogs',
    setup() {
        const blogWrappers = ref([
            {
                blogItems: [
                    {
                        imgUrl: require('../../../../assets/img/banner/blog-01.jpg'),
                        link: '#',
                        title: 'Share the Love',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        imgUrl: require('../../../../assets/img/banner/blog-02.jpg'),
                        link: '#',
                        title: 'Upon of seasons earth',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        imgUrl: require('../../../../assets/img/banner/blog-03.jpg'),
                        link: '#',
                        title: 'From Now we are certified web',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                ]
            },
            {
                blogItems: [
                    {
                        imgUrl: require('../../../../assets/img/banner/blog-02.jpg'),
                        link: '#',
                        title: 'Upon of seasons earth',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        imgUrl: require('../../../../assets/img/banner/blog-03.jpg'),
                        link: '#',
                        title: 'From Now we are certified web',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                ]
            }
        ]);
        onMounted(() => {
            owlCarouselHomeBlogs();
        })

        return { blogWrappers }
    }
}
</script>

<template>
    <div id="ttsmartblog" class="my-40 my-sm-25 bottom-to-top hb-animate-element">
        <div class="tt-title d-inline-block float-none w-100 text-center text-capitalize">latest news
        </div>
        <div class="container">
            <div class="row">
                <div class="smartblog-content owl-carousel text-center">
                    <div class="blog-inner" v-for="wrapper in blogWrappers" :key="wrapper.blogItems">
                        <div class="ttblog" v-for="blog in wrapper.blogItems" :key="blog.title">
                            <div class="item">
                                <div class="ttblog_image_holder">
                                    <a :href="blog.link">
                                        <img :src="blog.imgUrl" alt="blog-01">
                                    </a>
                                </div>
                                <div class="blog-content-wrap float-left w-100">
                                    <div class="blog_inner">
                                        <h4 class="blog-title"><span>{{ blog.title }}</span></h4>
                                        <div class="blog-desc">{{ blog.description }}</div>
                                        <div class="read-more text-capitalize">
                                            <a title="Click to view Read More" class="readmore" :href="blog.link">read
                                                more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>