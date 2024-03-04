<script>
import { store } from "../../store";

// impoort carousel
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'HomeTestimonials',
    components: {
        Pagination,
        Carousel,
        Slide,
    },
    data() {
        return {
            store,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
        }
    }
})
</script>


<template>
    <section id="testimonials" class="container-fluid">
        <div class="row col-lg-10 mx-auto">
            <div class="col-lg-8 mx-auto ">
                <Carousel :autoplay="5000" :wrap-around="true">
                    <Slide v-for="slide in store.testimonialArr" :key="slide">
                        <div class="carousel__item d-flex flex-column ">
                            <div class="mx-auto position-relative ">
                                <i class="fa-solid fa-quote-left position-absolute p-2"></i>
                                <figure class="overflow-hidden">
                                    <img class="img-fluid" :src="`../../public/img/testimonials/${slide.img}`"
                                        alt="profile picture">
                                </figure>
                            </div>
                            <h6 class="my-3">{{ slide.name }} <span class="text-yellow">({{ slide.job }})</span></h6>
                            <blockquote class="mb-5">{{ slide.message }}</blockquote>
                        </div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.container-fluid {
    background-image: url('../../public/img/testimonials/parallax.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 150px;
}

.carousel__item {
    figure {
        border-radius: 50%;
        border: 2px solid $mySecondaryColor;
        width: fit-content;
    }

    .fa-quote-left {
        font-size: 1rem;
        color: $myOtherColor;
        background-color: $mySecondaryColor;
        border-radius: 50%;
        top: 0;
        left: 0;
    }

    .text-yellow {
        color: $mySecondaryColor;
    }

    blockquote {
        font-size: small;
    }
}
</style>

<!-- carousel variable override -->

<style lang="scss">
@use "../../styles/partials/variables.scss" as *;

#testimonials {
    .carousel__pagination {
        align-items: center;
        padding-left: 0;
    }

    .carousel__pagination-button::after {
        display: block;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $myOtherColor;
    }

    .carousel__pagination-button--active::after {
        background-color: $mySecondaryColor;
        width: 10px;
        height: 10px;
    }
}
</style>