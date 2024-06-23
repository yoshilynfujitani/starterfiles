import { defineStore } from "pinia";
import { ref } from "vue";

export const useDarkModeStore = defineStore("darkmode", () => {
    //States
    const isDark = ref(false);
    //functions
    function setMode() {
        isDark.value = !isDark.value;
    }

    return { isDark, setMode };
});
