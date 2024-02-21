<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppOverHeader from './components/AppOverHeader.vue';

import { store } from "./store";

export default {
    components: {
    AppHeader,
    AppFooter,
    AppMain,
    AppOverHeader
},
}
</script>


<template>
    <AppOverHeader/>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>


<style lang="scss">
@use "./styles/general.scss" as *;

body {
    background-image: url('./assets/img/body-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>