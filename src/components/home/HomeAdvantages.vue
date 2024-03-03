<script>
import { store } from "../../store";

export default {
    name: 'HomeAdvantages',
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
            <div class="col-12 d-flex flex-wrap row-gap-4 justify-content-between ">
                <div class="adv-hover d-flex col-xs-12 col-md-6 col-lg-3 ">
                    <div class="me-4">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <p class="text-hover mb-0 ">Free Delivery</p>
                        <p class="grey-font mb-0 ">Free Shipping On All Order</p>
                    </div>
                <hr class="d-none d-lg-block ">
                </div>
                <div class="adv-hover d-flex col-xs-12 col-md-6 col-lg-3 ">
                    <div class="me-4">
                        <i class="fa-solid fa-sack-dollar"></i>
                    </div>
                    <div>
                        <p class="text-hover mb-0 ">Money Return</p>
                        <p class="grey-font mb-0 ">Back Guarantee in 7 days</p>
                    </div>
                <hr class="d-none d-lg-block ">
                </div>
                <div class="adv-hover d-flex col-xs-12 col-md-6 col-lg-3 ">
                    <div class="me-4">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div>
                        <p class="text-hover mb-0 ">Member Discount</p>
                        <p class="grey-font mb-0 ">On every order over $130.00</p>
                    </div>
                <hr class="d-none d-lg-block ">
                </div>
                <div class="adv-hover d-flex col-xs-12 col-md-6 col-lg-3 ">
                    <div class="me-4">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div>
                        <p class="text-hover mb-0 ">Return Policy</p>
                        <p class="grey-font mb-0 ">Support 24 hours a day</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.fa-solid {
    font-size: 2.5rem;
}

hr {
    width: 2.5rem;
    transform: rotate(90deg);
    color: #ffffff50;
}

.grey-font {
    opacity: 0.5;
}

.adv-hover:hover .fa-solid, 
.adv-hover:hover .text-hover {
    color: $mySecondaryColor;
}
</style>
