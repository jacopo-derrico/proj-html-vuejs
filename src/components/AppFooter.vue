<script>
import { store } from "../store";
import AppFooterNav from './AppFooterNav.vue';


export default {
    name: 'AppFooter',
    components: {
        AppFooterNav,
    },
    data() {
        return {
            store
        };
    },
    methods: {
        addEmail() {
            store.newsletterEmails.push(store.addEmail)
            console.log(store.newsletterEmails)
        }
    },
}
</script>


<template>
    <footer class="container-fluid">
        <div id="footer-info" class="row col-lg-10 gap-2 flex-lg-nowrap row-gap-5 ">
            <div class="col-xs-12 col-md-6 col-lg-3 d-flex flex-column">
                <h5 class="mb-4">Address info</h5>
                <div class="d-flex">
                    <i class="fa-solid fa-location-dot mt-1 me-2"></i>
                    <address class="grey-font">60 29th Street San Francisco, CA 94110 507-Union Trade Center, United States
                        of America
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
            <div class="col-5 col-lg-3">
                <h5 class="mb-3">Information</h5>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between">
                    <AppFooterNav v-for="(element, index) in store.footerInfoNav" :key="index" :propsName="element.name"
                        :propsLink="element.link" />
                </ul>
            </div>
            <div class="col-5 col-lg-3">
                <h5 class="mb-3">Extras</h5>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between">
                    <AppFooterNav v-for="(element, index) in store.footerInfoNav" :key="index" :propsName="element.name"
                        :propsLink="element.link" />
                </ul>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <h5 class="mb-3">Our newsletter</h5>
                <p>
                    There are many variations of passages of form humour or randomised
                </p>
                <div class="input-group mb-3">
                    <input v-model="store.addEmail" type="email" class="form-control" placeholder="name@example.com">
                    <span class="input-group-text fa-solid fa-square-caret-right" @click="addEmail">
                    </span>
                </div>
                <div id="social-icons" class="d-flex gap-4 ">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                    <i class="fa-brands fa-skype"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
        <div id="copyright" class="row col-lg-10 justify-content-between align-items-center mx-auto py-2">
            <div class="col-3">
                <p class="mb-0">
                    Copyright © 2024 Codezeel
                </p>
            </div>
            <div id="payments" class="d-flex col-3 gap-2 justify-content-end align-items-center">
                <img src="../assets/img/footer/amex-color.png" alt="payment">
                <img src="../assets/img/footer/discover-color.png" alt="payment">
                <img src="../assets/img/footer/mastercard-color.png" alt="payment">
                <img src="../assets/img/footer/paypal-color.png" alt="payment">
                <img src="../assets/img/footer/visa-color.png" alt="payment">
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

        .input-group {
            max-width: 100%;

            span{
                cursor: pointer;

                &:hover {
                    color: $mySecondaryColor;
                }
            }
        }

        #social-icons i {
            color: $myOtherColor;

            &:hover {
                color: $mySecondaryColor;
            }
        }
    }

    #copyright {
        border-top: 0.5px solid #ffffff65;
    }

    #payments img {
        width: 20px;
    }
}
</style>
