import { createWebHistory, createRouter } from "vue-router";
import MyLibrary from "@/views/MyLibrary.vue";

const routes = [
    {
        path: "/",
        name: "mylibrary",
        component: MyLibrary,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/books/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
