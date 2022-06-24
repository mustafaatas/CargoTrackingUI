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
      state.user = user;
    }
  },
})

export default store