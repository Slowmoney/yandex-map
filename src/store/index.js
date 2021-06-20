import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coords: [55.69051894039127, 37.654947679083044],
        points: [],
        form: {
            name: "",
            type: "Placemark",
            hint: "",
            coords: [55.69051894039127, 37.654947679083044],
            fill: { enable: true, color: "#F000000F"},
            stroke: { enable: true, color: "#F000000F"},
        }
    },
    mutations: {

        setCoords(state, payload) {
            state.coords = payload
        },
        clearForm(state) {
            state.form.type = "Placemark";
            state.form.name = ""
            state.form.hint = ""
            state.form.coords = state.coords
        }
    },
    actions: {
    },
    modules: {
    }
})
