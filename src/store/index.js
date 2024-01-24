// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)
const initialPageId = localStorage.getItem('pageid') || 0;
export default new Vuex.Store({
  state: {
    pageid: parseInt(initialPageId)
  },
  mutations: {
    SET_PAGE_ID(state, id) {
      state.pageid = id;
      // Save the updated pageid to LocalStorage
      localStorage.setItem('pageid', id);
    }
  },
  actions: {
    setPageId: (context, id) => {
      setTimeout(function () { // reach out for data
        context.commit('SET_PAGE_ID', id);
      }, 10);
    }
  }
})
