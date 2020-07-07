<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered">
        <p id="title" class="title">
          About the Project
        </p>
        <p id="text">
          Information about countries and territories<br>
          Another project created by Vicent García<br>
          <strong>Data Source</strong>: RestCountriesAPI - <a href="https://restcountries.eu/">Visit the Website</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'MainLayout'

}
</script>

<style>
  #title{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #text {
    margin-bottom: 20px;
  }

</style>
