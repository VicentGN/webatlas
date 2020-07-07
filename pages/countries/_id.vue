<template>
  <div class="container data">
    <!-- Flag, Title, Subdata and Map -->
    <div class="columns panel">
      <!-- Flag and Title -->
      <div class="column is-8">
        <div class="columns">
          <div class="column">
            <div class="columns">
              <!-- The Flag -->
              <div class="column is-2">
                <img :src="country[0].flag" alt="img">
              </div>
              <!-- The Title -->
              <div id="title" class="column is-10 title is-1">
                {{ country[0].altSpellings[1] }}
              </div>
            </div>
          </div>
        </div>
        <!-- SubData -->
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column has-text-centered">
                <span class="tit">Capital</span>
                <br>
                <span class="val">{{ country[0].capital }}</span>
              </div>
              <div class="column has-text-centered">
                <span class="tit">Population</span>
                <br>
                <span class="val">{{ country[0].population }}</span>
              </div>
              <div class="column has-text-centered">
                <span class="tit">Area (Sq/Km)</span>
                <br>
                <span class="val">{{ country[0].area }}</span>
              </div>
              <div class="column has-text-centered">
                <span class="tit">Region</span>
                <br>
                <span class="val">{{ country[0].region }}</span>
              </div>
              <div class="column has-text-centered">
                <span class="tit">Language</span>
                <br>
                <span class="val">{{ country[0].languages[0].name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- The Map -->
      <div class="column is-4">
        <Map :coordinates="country[0].latlng" />
      </div>
    </div>
    <!-- Another Data -->
    <div class="columns panel">
      <div class="column">
        <div class="columns">
          <div class="column has-text-centered">
            <span class="tit">Calling Code</span>
            <br>
            <span class="val">{{ country[0].callingCodes[0] }}</span>
          </div>
          <div class="column has-text-centered">
            <span class="tit">Demonym</span>
            <br>
            <span class="val">{{ country[0].demonym }}</span>
          </div>
          <div class="column has-text-centered">
            <span class="tit">Currency</span>
            <br>
            <span class="val">{{ country[0].currencies[0].symbol }}</span>
          </div>
          <div class="column has-text-centered">
            <span class="tit">Native Name</span>
            <br>
            <span class="val">{{ country[0].nativeName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '../../components/Map'

export default {
  name: 'CountriesCard',
  layout: 'MainLayout',
  component: {
    Map
  },
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

.tit {
  color: gray
}

.val {
  font-size: 25px;
}

</style>
