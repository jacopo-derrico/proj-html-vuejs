<script>
import { store } from "../../store";

export default {
    name: 'HomeGameCat',
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <section class="container-fluid">
        <div class="row col-xs-12 col-lg-10 mx-auto py-5 ">
            <div class="mb-3">
                <h2 class="text-center mb-0 ">Special Category</h2>
                <div class="divider mx-auto my-2 "></div>
            </div>
            <div class="d-flex col-12 flex-wrap ">
                <figure class="col-lg-4 position-relative ">
                    <img class="img-fluid" src="../../../public/img/home/category-image-02.jpg" alt="game cover">
                    <div class="px-2 py-3 position-absolute ">
                        <h5>Battlefield</h5>
                        <a href="#">Shop Now</a>
                    </div>
                </figure>
                <figure class="col-lg-4 position-relative ">
                    <img class="img-fluid" src="../../../public/img/home/category-image-01.jpg" alt="game cover">
                    <div class="px-2 py-3 position-absolute ">
                        <h5>PUBG</h5>
                        <a href="#">Shop Now</a>
                    </div>
                </figure>
                <figure class="col-lg-4 position-relative ">
                    <img class="img-fluid" src="../../../public/img/home/category-image-03.jpg" alt="game cover">
                    <div class="px-2 py-3 position-absolute ">
                        <h5>Dragonball Z</h5>
                        <a href="#">Shop Now</a>
                    </div>
                </figure>
            </div>
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

figure:hover .position-absolute {
    background-color: $myAccentColor;
}

.position-absolute {
    background-color: $myAccentOp30;
    bottom: 0;
    width: 100%;

    h5 {
        font-weight: bold;
    }

    a {
        color: $mySecondaryColor;
    }
}
</style>
