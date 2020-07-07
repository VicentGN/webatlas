import Vuex from 'vuex'
import RestCountriesApi from '../services/RestCountriesAPI'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      countries: {},
      loading: false
    }),
    mutations: {
      fillWithCountries (state, payload) {
        state.countries = payload
      },
      filterCountries (state, payload) {
        state.countries = state.countries.filter(country => country.name === payload)
      }
    },
    actions: {
      getAllCountries (context) {
        RestCountriesApi.getAllCountries()
          .then((result) => {
            context.commit('fillWithCountries', result.data)
            this.state.loading = true
          })
          .catch()
      }
    }
  })
}

export default createStore
