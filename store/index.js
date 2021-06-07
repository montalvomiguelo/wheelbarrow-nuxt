export const state = () => ({
  layout: {},
})

export const mutations = {
  SET_LAYOUT(state, layout) {
    state.layout = layout
  },
  SET_ERROR(state, error) {
    state.layout = error
  },
}

export const actions = {
  async fetchLayout({ commit }) {
    try {
      const layout = (await this.$prismic.api.getSingle('layout')).data

      commit('SET_LAYOUT', layout)
    } catch (e) {
      const error = 'Please create a layout document'

      commit('SET_ERROR', error)
    }
  },
}
