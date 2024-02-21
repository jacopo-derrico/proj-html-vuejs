<script>
import { store } from "../../store";
import ShopCarousel from "../home/ShopCarousel.vue";
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
    name: 'HomeDealsCarousel',
    components: {
        ShopCarousel,
        VueCountdown
    },
    data() {
        const now = new Date();
        const endDeals = new Date('May 9, 2024 23:59:59');
        return {
            store,
            time: endDeals - now,
        };
    }
}
</script>


<template>
    <section class="container-fluid">
        <div class="row col-lg-10 mx-auto py-5 ">
            <div class="mb-3">
                <h2 class="text-center mb-0 ">Deal Of The Day</h2>
                <div class="divider mx-auto my-2 "></div>
            </div>
            <vue-countdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds, milliseconds }">
                <div class="d-flex justify-content-center dealCountdown mb-5 flex-wrap ">
                    <h5 class="px-5 py-3">{{ days }} days</h5>
                    <h5 class="px-5 py-3">{{ hours }} hours</h5>
                    <h5 class="px-5 py-3">{{ minutes }} mins</h5>
                    <h5 class="px-5 py-3">{{ seconds }} secs</h5>
                </div>
            </vue-countdown>
            <ShopCarousel/>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables.scss" as *;

.dealCountdown h5 {
    border: 0.5px solid rgba(255, 255, 255, 0.3);
}

.divider {
    background-color: $mySecondaryColor;
    width: 50px;
    height: 2px;
}
</style>
