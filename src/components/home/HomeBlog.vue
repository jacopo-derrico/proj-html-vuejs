<script>
import { store } from "../../store";
import BlogCarousel from "./BlogCarousel.vue";

export default {
    name: 'HomeBlog',
    components: {
        BlogCarousel
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
        <div class="row col-lg-10 mx-auto py-5">
            <div class="mb-3">
                <h2 class="text-center mb-0 ">New Games Blog</h2>
                <div class="divider mx-auto my-2 "></div>
            </div>
            <BlogCarousel/>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.divider {
    background-color: $mySecondaryColor;
    width: 50px;
    height: 2px;
}
</style>
