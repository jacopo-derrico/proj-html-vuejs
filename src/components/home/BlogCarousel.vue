<script>
import { store } from "../../store";

// carousel import
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
    name: 'BlogCarousel',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            store,
            // carousel settings
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        };
    }
})
</script>


<template>
    <div id="blog-carousel" class="w-100">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in store.blogPreview" :key="slide">
                <div class="carousel__item m-3 position-relative ">
                    <figure class="position-relative mb-0 ">
                        <img class="img-fluid" :src="`./src/assets/img/blog/${slide.img}`" alt="thumbnail">
                        <div class="hover-icons position-absolute action-icons justify-content-center align-items-center gap-3">
                            <div class="icon-circle d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="icon-circle d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-link"></i>
                            </div>
                        </div>
                    </figure>
                    <div class="info-box text-start p-2 ">
                        <div class="d-flex gap-2 my-2">
                            <i class="fa-solid fa-calendar-days yellow"></i>
                            <span>{{ slide.date }}</span>
                            <i class="fa-solid fa-comments yellow"></i>
                            <span>{{ slide.comments }} comments</span>
                        </div>

                        <div>
                            <p class="text-white blog-title">{{ slide.title }}</p>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>


<style lang="scss" >
@use "../../styles/partials/variables.scss" as *;

#blog-carousel {

    &:hover .carousel__prev, &:hover .carousel__next{
        display: flex;
    }
    .carousel__prev,
    .carousel__next {
        display: none;
        color: $myOtherColor;
        border: 1px solid $myOtherColor;
        border-radius: 50%;
        margin-bottom: 150px;
    
        &:hover {
            color: $mySecondaryColor;
            border: 1px solid $mySecondaryColor;
        }
    }
    
    .yellow {
        color: $mySecondaryColor;
    }
    
    .blog-title {
        font-size: small;
    }
    
    .hover-icons {
        display: none;
    }
    
    figure:hover .hover-icons {
        display: flex;
    }
    
    .action-icons {
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
    
        .icon-circle {
            border: 1px solid white;
            border-radius: 50%;
            width: 40px;
            aspect-ratio: 1;
        }
    }
    
    .info-box {
        span {
            color: rgba(255, 255, 255, 0.3);
            font-size: small;
            margin-right: 20px;
        }
    
        i {
            font-size: small;
        }
    }
}
</style>