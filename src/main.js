import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCodeHighlight from "vue-code-highlight";


// import styles
import "@/assets/styles/style.scss";
Vue.use(VueCodeHighlight);

Vue.config.productionTip = false;

new Vue({
    router,
    store,

    render: function (h) {
        return h(App);
    },
}).$mount("#app");
