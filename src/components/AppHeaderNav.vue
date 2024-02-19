<script>
import { store } from "../store";

export default {
    name: 'AppHeaderNav',
    props: {
        propsName: String,
        propsType: Boolean,
        propsLink: String,
        propsDropItems: Array
    },
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <li v-if="propsType === true" class="nav-item dropdown">
        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ propsName }}
        </a>
        <ul class="dropdown-menu">
            <li v-for="pages in propsDropItems">
                <a class="dropdown-item" :href="pages.link">{{ pages.name }}</a>
            </li>
        </ul>
    </li>
    <li v-else class="nav-item">
        <a class="nav-link" aria-current="page" :href="propsLink">{{ propsName }}</a>
    </li>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../../src/styles/partials/variables.scss" as *;

.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown>.dropdown-toggle:active {
    pointer-events: none;
}
</style>
