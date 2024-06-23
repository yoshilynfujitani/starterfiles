import App from "@/component/App.vue";
import Login from "./pages/Auth/Login.vue";
import Signup from "./pages/Auth/Signup.vue";

export const routes = [
    {
        path: "/",
        name: "page1",
        component: App,
    },

    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup,
    },
];
