export const state = () => ({
  locales: ['en', 'fa'],
  locale: 'fa',
  revenueStats: {}
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },

  SetRevenueStats(state, data) {
    state.revenueStats = data;
  }
}

export const getters = {
  getRevenueStats: state => {
    return state.revenueStats;
  }
}
