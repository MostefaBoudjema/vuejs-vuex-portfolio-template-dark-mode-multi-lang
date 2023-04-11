// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageid: 0
  },
  mutations: {
    setPageId(state, id) {
      state.pageid = id;
    }
  },
  actions: {
    setPageId: (context, id) => {
      setTimeout(function () { // reach out for data
        context.commit('setPageId', id);
      }, 10);
    }
  }
})
