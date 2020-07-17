<template>
  <div class="container">
    <div class="columns has-text-centered navbar">
      <nuxt-link to="/" class="column is-2 is-offset-4 link">
        <p>Home</p>
      </nuxt-link>
      <nuxt-link to="/about" class="column is-2 link">
        <p>About</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

  .link{
    font-size: 25px;
    margin: 10px 0px;
    color: black;
  }

  .link:hover{
    color: red;
  }

</style>
