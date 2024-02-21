<script>
import { store } from "../store";
import HomeHero from "./home/HomeHero.vue";
import HomeAdvantages from "./home/HomeAdvantages.vue";
import HomeCategories from "./home/HomeCategories.vue";
import HomeDiscounts from "./home/HomeDiscounts.vue";
import HomeGameCat from "./home/HomeGameCat.vue";
import HomeShopCarousel from "./home/HomeShopCarousel.vue";
import HomeDealsCarousel from "./home/HomeDealsCarousel.vue";
import HomeTestimonials from "./home/HomeTestimonials.vue";
import HomeBlog from "./home/HomeBlog.vue";
import HomeBrands from "./home/HomeBrands.vue";

export default {
    name: 'AppMain',
    data() {
        return {
            store
        };
    },
    components: {
        HomeHero,
        HomeAdvantages,
        HomeCategories,
        HomeDiscounts,
        HomeGameCat,
        HomeShopCarousel,
        HomeDealsCarousel,
        HomeTestimonials,
        HomeBlog,
        HomeBrands
    }
}
</script>


<template>
    <HomeHero />
    <HomeAdvantages />
    <HomeCategories />
    <HomeGameCat />
    <HomeShopCarousel />
    <HomeDiscounts />
    <HomeDealsCarousel />
    <HomeTestimonials />
    <HomeBlog />
    <HomeBrands />

    <div id="backToTopBtn">
        <a href="#header">
            <button class="btn p-0">
                <i class="fa-solid fa-angles-up"></i>
            </button>
        </a>
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;

#backToTopBtn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 99;

    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    background-color: $mySecondaryColor;
    padding: 2.5px;

    button {
        width: 35px;
        height: 35px;
        border: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    i {
        color: black;
        transform: rotate(-45deg);
    }
}
</style>
