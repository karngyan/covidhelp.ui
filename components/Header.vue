<template>
<nav v-show="$route.path !== '/login' && $route.path !== 'logout'" class="bg-white z-10 backdrop-filter border-b border-gray-200 shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex px-2 lg:px-0">
        <nuxt-link to="/" class="flex-shrink-0 flex items-center space-x-1">
          <Logo class="text-purple-700 h-10 w-10" alt="Logo" />
          <span class="font-bold">Jharkhand Covid Help</span>
        </nuxt-link>
      </div>

      <nuxt-link to="/login" class="justify-center flex items-center">
        <b-button type="is-primary is-light">Sign In</b-button>
      </nuxt-link>
    </div>
  </div>
</nav>


</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style scoped>

</style>
