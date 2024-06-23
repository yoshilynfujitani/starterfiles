import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler";
import App from "@/component/App.vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import Container from "./Layout/Container.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
const pinia = createPinia();
const app = createApp({});

app.use(router);
app.use(VueQueryPlugin);
app.component("Container", Container);
app.component("app", App);
app.use(pinia);
app.mount("#app");
