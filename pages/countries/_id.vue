<template>
  <div class="container data">
    <div class="columns">
      <div class="column is-8">
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column is-2">
                <img :src="country[0].flag" alt="img">
              </div>
              <div class="column is-10 title">
                {{ country[0].altSpellings[1] }}
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column" />
        </div>
      </div>
      <div class="column is-4" />
    </div>
    <div class="columns">
      <div class="column" />
    </div>
    <div class="columns">
      <div class="column" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CountriesCard',
  layout: 'MainLayout',
  computed: {
    country () {
      return this.$store.state.countries.filter(country => country.alpha2Code === this.$route.params.id)
    }
  }
}
</script>

<style>

.data {
  margin-top: 30px;
  margin-bottom: 30px;
}

</style>
