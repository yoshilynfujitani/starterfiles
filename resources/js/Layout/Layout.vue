<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../PiniaStore/AuthStore";
import { useDarkModeStore } from "../PiniaStore/DarkModeStore";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

const authStore = useAuthStore();
const darkModeStore = useDarkModeStore();

const { isDark } = storeToRefs(darkModeStore);
const { setMode } = darkModeStore;
const { isAuthenticated, name } = authStore;
</script>

<template>
    <VueQueryDevtools />
    <Container>
        <div
            class="transition-all ease-in-out duration-300 h-screen bg-gray-100 dark:bg-gray-900"
        >
            <div
                class="fixed top-0 bg-white/60 w-full shadow-sm backdrop-blur-sm dark:bg-gray-700"
            >
                <div class="container mx-auto">
                    <div class="space-x-10">
                        <RouterLink to="/" class="text-gray-600 font-bold"
                            >Home</RouterLink
                        >
                        <button @click="logout" v-if="isAuthenticated">
                            Logout
                        </button>
                        <h1>{{ name }}</h1>
                        <button @click="setMode">
                            {{ isDark ? "dark" : "light" }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="h-screen flex items-center justify-center">
                <slot />
            </div>
        </div>
    </Container>
</template>
