<script>
import { store } from "../../store";

export default {
    name: 'HomeSingleCard',
    props: {
        propsName: String,
        propsTitle: String,
        propsImg: String
    },
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <figure class="col-xs-12 col-lg-6 position-relative ">
        <img  :src="`../../src/assets/img/home/${propsImg}`" alt="banner">
        <div class="col-6 position-absolute ">
            <h3 class="highlight-bg text-black ">{{ propsName }}</h3>
            <h2 class="font-white mt-4">{{ propsTitle }}</h2>
        </div>
    </figure>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../../src/styles/partials/variables.scss" as *;

.col-6{
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
}

figure {
    overflow-y: hidden;
    overflow-x: hidden;
}

// figure:hover img{
//     scale: 1.2;
// }
</style>
