<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <nuxt-link to="/">Home</nuxt-link>
        </a>

        <a class="navbar-item">
          <nuxt-link to="/about">About</nuxt-link>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style></style>
