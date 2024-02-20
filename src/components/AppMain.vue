<script>
import { store } from "../store";
import HomeHero from "./home/HomeHero.vue";
import HomeAdvantages from "./home/HomeAdvantages.vue";

export default {
    name: 'AppMain',
    data() {
        return {
            store
        };
    },
    components: {
        HomeHero,
        HomeAdvantages
    }
}
</script>


<template>
    <HomeHero />
    <HomeAdvantages />
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>
