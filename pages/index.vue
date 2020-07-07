<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered">
        <p class="title">
          WebAtlas
        </p>
        <p class="subtitle">
          Information about countries at your hands
        </p>
      </div>
    </div>
    <div class="columns">
      <div id="display" class="column">
        <CountriesCard v-for="country in countries" :key="country.id" :country="country" />
      </div>
    </div>
  </div>
</template>

<script>
import CountriesCard from '../components/CountriesCard'

export default {
  name: 'Index',
  layout: 'MainLayout',
  components: {
    CountriesCard
  },
  computed: {
    countries () {
      return this.$store.state.countries
    }
  },
  mounted () {
    if (!this.$store.state.loading) {
      this.$store.dispatch('getAllCountries')
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
