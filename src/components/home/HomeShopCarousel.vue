<script>
import { store } from "../../store";
import ShopCarousel from "../home/ShopCarousel.vue";

export default {
    name: 'HomeShopCarousel',
    components: {
        ShopCarousel,
    },
    data() {
        return {
            store,
        };
    }
}
</script>


<template>
    <section class="container-fluid">
        <div class="row col-lg-10 mx-auto py-5 ">
            <div class="mb-3">
                <h2 class="text-center mb-0 ">Our Products</h2>
                <div class="divider mx-auto my-2 "></div>
            </div>
            <div class="d-flex justify-content-center buttonsMenu mb-5">
                <button class="btn px-5 py-2">Featured</button>
                <button class="btn px-5 py-2">New Arrivals</button>
                <button class="btn px-5 py-2">Best Sellers</button>
            </div>
            <ShopCarousel/>
        </div>
    </section>
</template>


<style lang="scss" >
@use "../../styles/partials/variables.scss" as *;

.buttonsMenu button {
    border: 0.5px solid rgba(255, 255, 255, 0.3);
}

.buttonsMenu button:first-child {
    color: $mySecondaryColor;
}

.buttonsMenu button:hover {
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    color: $mySecondaryColor;
}

.divider {
    background-color: $mySecondaryColor;
    width: 50px;
    height: 2px;
}

.infos {
    background-color: $myAccentColor;
}

</style>
