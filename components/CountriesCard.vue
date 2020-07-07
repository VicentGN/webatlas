<template>
  <div class="card is-inline-block has-text-centered">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="country.flag" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content has-text-centered">
          <div class="title is-5">
            {{ country.name }}
          </div>
          <div class="subtitle is-5">
            {{ country.region }}
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <nuxt-link :to="`/countries/${ country.alpha2Code }`">
        <button class="button is-primary is-medium is-fullwidth">
          More Info
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountriesCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    country: Object
  }

}
</script>

<style>

.card {
    width: 300px;
    margin: 30px;

}

</style>
