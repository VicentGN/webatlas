<template>
  <l-map
    :zoom="zoom"
    :center="center"
  >
    <l-tile-layer :url="url" />
    <l-marker :lat-lng="center" @click="showMessage" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    country: Object
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 2,
      center: [this.country.latlng[0], this.country.latlng[1]]
    }
  },
  methods: {
    showMessage (event) {
      event.target.bindPopup(`I'm a country of ${this.country.region}`)
    }
  }

}
</script>

<style>
  l-map {
    height: 80%;
    width: 100%
  }

</style>
