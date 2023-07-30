// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)
const initialPageId = localStorage.getItem('pageid') || 0;
export default new Vuex.Store({
  state: {
    pageid: parseInt(initialPageId)
  },
  mutations: {
    setPageId(state, id) {
      state.pageid = id;
      // Save the updated pageid to LocalStorage
      localStorage.setItem('pageid', id);
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
