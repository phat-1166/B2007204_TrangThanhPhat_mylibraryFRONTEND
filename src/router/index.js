import { createWebHistory, createRouter } from "vue-router";
import MyLibrary from "@/views/MyLibrary.vue";

const routes = [
    {
        path: "/",
        name: "mylibrary",
        component: MyLibrary,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;