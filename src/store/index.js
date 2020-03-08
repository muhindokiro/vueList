import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        // loadpersons(state, payload) {
        //     state.data = payload.data;
        // },
        savetask(state, payload) {
            state.data.push(payload.data);
        },
        // deleteperson(state, payload) {
        //     let index = state.data.findIndex(item => item.ID == payload.data.ID)
        //     state.data.splice(index, 1);
        // }
    },
    actions: {
        // async loadpersons({ commit }) {
        //     await axios.get("api/listperson").then(response => {
        //         console.log(response.data);
        //         commit("loadpersons", response);
        //     });
        // },
        async savetask({ commit }, payload) {
            await axios.post("api/savetask", payload).then(response => {
                console.log(response.data);
                commit("savetask", response);
            });
        },
        // async deleteperson({ commit }, id) {
        //     await axios.get(`api/deleteperson?id=${id}`).then(response => {
        //         console.log(response.data);
        //         commit("deleteperson", response);
        //     });
        // }
    },
    modules: {}
});