import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    }
  },
  mutations: {
    setUser(state, user) {
      console.log("giriyor")
      state.user = user;
    }
  },
  // actions: {
  //   updateUser({ commit }, user) {
  //     commit('setUser', user)
  //   }
  // }
})

export default store