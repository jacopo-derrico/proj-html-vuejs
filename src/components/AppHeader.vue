<script>
import { store } from "../store";
import AppHeaderNav from "./AppHeaderNav.vue";

export default {
    name: 'AppHeader',
    components: {
        AppHeaderNav,
    },
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-between col-xs-12 col-lg-10 my-2">
            <!-- Website logo -->
            <div class="col-lg-3">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/header/logo.png" alt="GameHoax">
                </a>
            </div>
            <!-- Mobile menu button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Main nav menu -->
            <div class="collapse navbar-collapse col-lg-6" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between">
                    <AppHeaderNav v-for="(element, index) in store.headerNav" :key="index" :propsName="element.name"
                        :propsType="element.isDropdown" :propsLink="element.link" :propsDropItems="element.dropdownItems" />
                </ul>
            </div>
            <!-- Right nav icons -->
            <div class="collapse navbar-collapse col-lg-3" id="actionIcons">
                <ul class="navbar-nav mb-2 mb-lg-0 w-100 gap-3 justify-content-end align-items-center">
                    <li v-for="(icon, index) in store.headerActionNav" :key="index">
                        <a :href="icon.link">
                            <i :class="`fa-solid ${icon.faClass}`"></i>
                        </a>
                    </li>
                    <span>(0) €0.00</span>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;

nav {
    margin: 0 auto;
    background-color: $myPrimaryColor;
    .fa-solid {
        color: $myOtherColor;

        &:hover {
            color: $mySecondaryColor;
        }
    }

    #actionIcons {
        color: $mySecondaryColor;
        span {
            font-size: smaller;
        }
    }
}
</style>
