<script>
import { store } from "../store";

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <footer class="container-fluid">
        <div id="footer-info" class="row col-lg-10 gap-2 flex-nowrap">
            <div class="col-xs-12 col-md-6 col-lg-3 d-flex flex-column">
                <h5 class="mb-3">Address info</h5>
                <div class="d-flex">
                    <i class="fa-solid fa-location-dot mt-1 me-2"></i>
                    <address class="grey-font">60 29th Street San Francisco, CA 94110 507-Union Trade Center, United States of America
                    </address>
                </div>
                <div class="d-flex my-2">
                    <i class="fa-solid fa-phone mt-1 me-2"></i>
                    <a href="tel:+00123456789" class="grey-font">(+00) 123-456-789</a>
                </div>
                <div class="d-flex">
                    <i class="fa-solid fa-envelope mt-1 me-2"></i>
                    <a href="mailto:demo@example.com" class="grey-font">demo@example.com</a>
                </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <h5 class="mb-3">Information</h5>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <h5 class="mb-3">Extras</h5>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <h5 class="mb-3">Our newsletter</h5>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;

footer {
    background-image: url('../assets/img/footer/footer-bg.png');
    background-position: center;
    background-size: cover;

    #footer-info {
        margin: 0 auto;
        padding-block: 80px;

        i {
            color: $mySecondaryColor;
        }

        .d-flex>a {
            text-decoration: none;
            color: $myOtherColor;

            &:hover {
                color: $mySecondaryColor;
                opacity: 1;
            }
        }

        .grey-font {
            opacity: 0.5;
        }
    }
}
</style>
