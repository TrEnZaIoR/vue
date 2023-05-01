import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    studs: []
  },
  mutations: {
    SET_STUDS_TO_STATE: (state, studs) => {
      state.studs = studs
    }
  },
  actions: {
    GET_STUDS_FROM_API ({ commit }) {
      return axios('http://localhost:8081/api/studs', {
        method: 'GET'
      })
        .then((studs) => {
          commit('SET_STUDS_TO_STATE', studs.data)
          return studs
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    STUDS (state) {
      return state.studs
    }
  }
})
