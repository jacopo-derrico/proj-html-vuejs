<script>
import { store } from "../../store";

// carousel import
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
    name: 'ShopCarousel',
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
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            },
        };
    }
})
</script>


<template>
            <div id="carousel" class="w-100">
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="slide in store.productsData" :key="slide">
                        <div class="carousel__item m-3 position-relative ">
                            <figure class="position-relative mb-0 ">
                                <img class="img-fluid" :src="`./src/assets/img/products/${slide.imgHover}`" alt="product">
                                <img class="img-fluid position-absolute hover-images"
                                    :src="`./src/assets/img/products/${slide.img}`" alt="product">
                                <span v-if="slide.discount !== null"
                                    class="highlight-bg position-absolute discount-percent text-black ">-{{ slide.discount *
                                        100 }}%</span>
                            </figure>
                            <div class="infos text-start p-2 ">
                                <div>
                                    <i class="fa-solid fa-star yellowStar" v-for="element in slide.vote"></i>
                                    <i class="fa-solid fa-star" v-for="element in (5 - slide.vote)"></i>
                                </div>
                                <h6 class="my-2">{{ slide.name }}</h6>
                                <div v-if="slide.discount !== null">
                                    <span class="oldPrice">£{{ slide.price }} </span>
                                    <span class="price"> £{{ (slide.price - (slide.price * slide.discount)).toFixed(2) }}</span>
                                </div>
                                <div v-else>
                                    <span class="price">£{{ slide.price }}</span>
                                </div>
                            </div>
                            <div class="d-flex position-absolute actionButtons">
                                <i class="fa-solid fa-hand-pointer col-3 actionBtn py-2 "></i>
                                <i class="fa-solid fa-heart col-3 actionBtn py-2 "></i>
                                <i class="fa-solid fa-maximize col-3 actionBtn py-2 "></i>
                                <i class="fa-solid fa-eye col-3 actionBtn py-2 "></i>
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

.discount-percent {
    top: 15px;
    left: -10px;
    z-index: 3;
}

.fa-star {
    font-size: 0.8rem;
}

.carousel__prev,
.carousel__next {
    color: $myOtherColor;
    border: 1px solid $myOtherColor;
    border-radius: 50%;
    margin-bottom: 150px;

    &:hover {
        color: $mySecondaryColor;
        border: 1px solid $mySecondaryColor;
    }
}

.yellowStar {
    color: $mySecondaryColor;
}

.price {
    color: $mySecondaryColor;
}

.oldPrice {
    color: rgb(136, 136, 136);
    text-decoration: line-through;
}

.hover-images {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.actionButtons {
    width: calc(100% + 1px);
    background-color: $myAccentColor;
    z-index: 10;
}

.actionBtn {
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    border-bottom: none;
    cursor: pointer;

    &:hover {
        color: $mySecondaryColor;
    }
}

.carousel__item {
    overflow: hidden;
}

.carousel__item:hover .actionButtons {
    bottom: 0;
    left: -0.5px;
}

.carousel__item:hover .hover-images {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
</style>
