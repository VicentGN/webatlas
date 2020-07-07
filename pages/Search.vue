<template>
  <div class="container">
    <div id="entrada">
      <input
        class="input"
        type="text"
        placeholder="Search for a country/territory"
        @keyup="searchCountry( $event.target.value )"
      >
    </div>
    <div id="display">
      <CountriesCard v-for="country in countries" :key="country.id" :country="country" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CountriesCard from '../components/CountriesCard'

export default {
  name: 'Search',
  layout: 'MainLayout',
  components: {
    CountriesCard
  },
  computed: {
    ...mapGetters({
      countries: 'getCountriesByName'
    })
  },
  methods: {
    searchCountry (country) {
      this.$store.getters.getCountriesByName(country)
    }
  }
}
</script>

<style>
#entrada {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
