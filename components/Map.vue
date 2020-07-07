<template>
  <l-map>
    <l-tile-layer :url="url" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    coordinates: Object
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 4,
      center: [this.coordinates[0], this.coordinates[1]]
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
