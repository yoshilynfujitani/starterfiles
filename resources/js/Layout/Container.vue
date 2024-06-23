<script setup>
import { storeToRefs } from "pinia";
import { useDarkModeStore } from "../PiniaStore/DarkModeStore";

const darkModeStore = useDarkModeStore();

const { isDark } = storeToRefs(darkModeStore);
</script>
<template>
    <div
        class="transition-all ease-in-out duration-300"
        :class="{ dark: isDark }"
    >
        <main><slot /></main>
    </div>
</template>
