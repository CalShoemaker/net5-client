import api from '../../api'

// initial state
const state = () => ({
  articles: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllNews ({ commit }) {
    api.getNews(articles => {
      commit('setNews', articles)
    })
  }
}

// mutations
const mutations = {
  setNews (state, news) {
    state.articles = news
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}