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
        <div class="container-fluid justify-content-between col-xs-12 col-lg-10 ">
            <!-- Website logo -->
            <div class="container">
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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <AppHeaderNav 
                        v-for="(element, index) in store.headerNav" :key="index"
                        :propsName="element.name"
                        :propsType="element.isDropdown"
                        :propsLink="element.link"
                        :propsDropItems="element.dropdownItems"
                        :propsDropName="element.dropdownItems.name"
                        :propsDropLink="element.dropdownItems.link"
                    />
                </ul>
            </div>
            <!-- Right nav icons -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

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
}
</style>
