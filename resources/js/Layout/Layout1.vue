<template lang="">
    <div class="h-screen bg-gray-100">
        <div class="fixed top-0 bg-white/60 w-full shadow-sm backdrop-blur-sm">
            <div class="container mx-auto">
                <div class="space-x-10">
                    <RouterLink to="/" class="text-gray-600 font-bold"
                        >Home</RouterLink
                    >

                    <button @click="logout" v-if="this.authenticated == 1">
                        Logout
                    </button>
                </div>
            </div>
        </div>
        <div class="h-screen flex items-center justify-center">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: ["authenticated"],

    methods: {
        logout() {
            axios.post("/logout").then(() => {
                this.$router.push("/login");
            });
        },
    },
};
</script>
