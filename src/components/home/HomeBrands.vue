<script>
import { store } from "../../store";

export default {
    name: 'HomeBrands',
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <section class="container-fluid">
        <div class="row col-xs-12 col-lg-10 mx-auto justify-content-between py-5 ">
            <figure class="col-6 col-md-4 col-lg-2 " v-for="(brand, index) in store.brands">
                <img :src="`./src/assets/img/brands/${brand.img}`" alt="sponsor logo">
            </figure>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.row {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
