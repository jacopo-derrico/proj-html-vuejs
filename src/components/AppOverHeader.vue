<script>
import { store } from "../store";

export default {
    name: 'AppOverHeader',
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <div class="container-fluid">
        <div class="row">
            <div id="center-container" class="col-xs-12 col-lg-10 my-1 d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2 align-items-center ">
                    <span>
                        Wishlist (0)
                    </span>
                    <hr>
                    <span>
                        Need help ?
                    </span>
                </div>
                <div>
                    <a href="tel:+800-8754-987">Call 24/7 . 800-8754-987</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;

.container-fluid {
    background-color: $myPrimaryColor;
    border-bottom: 0.5px solid #ffffff65;

    #center-container {
        margin: 0 auto;
    }

    hr {
        width: 1.5rem;
        transform: rotate(90deg);
        color: #ffffff50;
    }

    span, a {
        font-size: smaller;
        text-decoration: none;
        color: $myOtherColor;
        opacity: 0.5;
    }
}
</style>
