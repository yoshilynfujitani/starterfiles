import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useAuthStore = defineStore("auth", () => {
    // States
    const userId = ref(null);
    const name = ref("");
    const email = ref("");
    const isAuthenticated = ref(0);

    // Load initial state from localStorage
    const storedAuth = localStorage.getItem("AUTH");

    if (storedAuth) {
        const auth = JSON.parse(storedAuth);
        userId.value = auth.userId;
        name.value = auth.name;
        email.value = auth.email;
        isAuthenticated.value = auth.isAuthenticated;
    }

    // Functions
    function setUserInfo(Info) {
        userId.value = Info.userId;
        name.value = Info.name;
        email.value = Info.email;
        isAuthenticated.value = Info.isAuthenticated;
    }

    // Watcher to save state to localStorage as a single object
    watch(
        () => ({
            userId: userId.value,
            name: name.value,
            email: email.value,
            isAuthenticated: isAuthenticated.value,
        }),
        (newAuth) => {
            localStorage.setItem("AUTH", JSON.stringify(newAuth));
        },
        { deep: true }
    );

    return { userId, name, email, isAuthenticated, setUserInfo };
});
