<script>
import { store } from "../../store";

export default {
    name: 'HomeHero',
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <section class="container-fluid">
        <div class="row col-lg-10 mx-auto">
            <div class="col-12">
                <h4 class="highlight-bg">Upcoming Stock</h4>
                <h1 class="my-5 text-white ">Resident Evil 3
                    <br>
                    Remake
                </h1>
                <button class="btn">Shop Now</button>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../../styles/general.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.container-fluid {
    background-image: url('../../public/img/home/hero-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 250px;

    h4 {
        color: #000;
    }
}

.btn {
    color: $myPrimaryColor;
    background-color: $myOtherColor;

    &:hover {
        color: $myPrimaryColor;
        background-color: $mySecondaryColor;
    }
}
</style>
