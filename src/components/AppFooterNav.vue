<script>
import { store } from "../store";

export default {
    name: 'AppFooterNav',
    props: {
        propsName: String,
        propsLink: String
    },
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <li class="nav-item">
        <a class="nav-link" aria-current="page" :href="propsLink">{{ propsName }}</a>
    </li>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../../src/styles/partials/variables.scss" as *;

.nav-link {
    text-decoration: none;
    color: $myOtherColor;
    opacity: 0.5;

    &:hover {
        color: $mySecondaryColor;
        opacity: 1;
    }
}
</style>
