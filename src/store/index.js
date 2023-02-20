import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        isMenu: false
    },
    mutations: {
        CHANGE_LOADING(state, data) {
            state.loading = data;
        },
    },
    actions: {},
    modules: {},
});
