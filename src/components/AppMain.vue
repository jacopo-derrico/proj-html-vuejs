<script>
import { store } from "../store";
import HomeHero from "./home/HomeHero.vue";
import HomeAdvantages from "./home/HomeAdvantages.vue";
import HomeCategories from "./home/HomeCategories.vue";
import HomeDiscounts from "./home/HomeDiscounts.vue";
import HomeGameCat from "./home/HomeGameCat.vue";
import HomeShopCarousel from "./home/HomeShopCarousel.vue";
import HomeDealsCarousel from "./home/HomeDealsCarousel.vue";

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
    HomeDealsCarousel
}
}
</script>


<template>
    <HomeHero />
    <HomeAdvantages />
    <HomeCategories/>
    <HomeGameCat />
    <HomeShopCarousel/>
    <HomeDiscounts/>
    <HomeDealsCarousel />
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>
