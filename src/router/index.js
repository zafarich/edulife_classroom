import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "",
        component: function () {
            return import(
                /* webpackChunkName: "about" */ "../pages/default.vue"
            );
        },
        children: [
            {
                path: "index",
                name: "index",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/index.vue"
                    );
                },
            },
            {
                path: "marks",
                name: "marks",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/marks/index.vue"
                    );
                },
            },
            {
                path: "courses",
                name: "courses",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/courses/index.vue"
                    );
                },
            },
            {
                path: "contest",
                name: "contest",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/contest/index.vue"
                    );
                },
            },
            {
                path: "chat",
                name: "chat",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/chat/index.vue"
                    );
                },
            },
            {
                path: "vacancy",
                name: "vacancy",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/vacancy/index.vue"
                    );
                },
            },
            {
                path: "settings",
                name: "settings",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/settings/index.vue"
                    );
                },
            },
            {
                path: "profil",
                name: "profil",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */ "../pages/profil/index.vue"
                    );
                },
            },
        ],
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;
