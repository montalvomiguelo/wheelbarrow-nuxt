export const state = () => ({
  mainNavigation: {},
})

export const mutations = {
  SET_MAIN_NAVIGATION(state, mainNavigation) {
    state.mainNavigation = mainNavigation
  },
  SET_ERROR(state, error) {
    state.mainNavigation = error
  },
}

export const actions = {
  async fetchMainNavigation({ commit }, $prismic) {
    try {
      const mainNavigation = (await $prismic.api.getSingle('main_navigation'))
        .data

      commit('SET_MAIN_NAVIGATION', mainNavigation)
    } catch (e) {
      const error = 'Please create a main_navigation document'

      commit('SET_ERROR', error)
    }
  },
}
