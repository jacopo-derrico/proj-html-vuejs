<script>
import { store } from "../../store";
import HomeSingleCard from "./HomeSingleCard.vue";

export default {
    name: 'HomeDiscounts',
    components: {
    HomeSingleCard
},
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <section class="container-fluid">
        <div class="row col-lg-10 mx-auto py-5 ">
           <HomeSingleCard v-for="(banner, index) in store.discountBanner" :key="index"
           :propsName="banner.discount"
           :propsTitle="banner.gameTitle"
           :propsImg="banner.img"/>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../styles/partials/variables.scss" as *;

</style>
