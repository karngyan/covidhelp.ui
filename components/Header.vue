<template>
<nav class="fixed w-full bg-white z-10 backdrop-filter border-b border-gray-200 shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex px-2 lg:px-0">
        <nuxt-link to="/" class="flex-shrink-0 flex items-center space-x-1">
          <Logo class="text-purple-700 h-10 w-10" alt="Logo" />
          <span class="font-bold">Jharkhand Covid Help</span>
        </nuxt-link>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <nuxt-link v-show="$store.state.user"  to="/dashboard" class="dark border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Dashboard
          </nuxt-link>
          <nuxt-link to="/feed" class="dark border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Feed
          </nuxt-link>
        </div>
      </div>

      <div class="flex flex-row space-x-6">
        <nuxt-link v-if="!$store.state.user" to="/login" class="justify-center flex items-center">
          <b-button type="is-primary is-light">Sign In</b-button>
        </nuxt-link>
        <div v-else class="justify-center flex items-center">
          <b-button @click="signOutUser" type="is-primary is-light">Sign Out</b-button>
        </div>
      </div>

    </div>

    <div v-show="$store.state.user" class="w-full flex items-center justify-center sm:ml-6 sm:hidden space-x-4 sm:space-x-8">
      <nuxt-link to="/dashboard" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Dashboard
      </nuxt-link>
      <nuxt-link to="/feed" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Feed
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
  },
  methods: {
    signOutUser() {
      const store = this.$store
      store.dispatch('signOut')
    }

  }
}
</script>

<style scoped>
.nuxt-link-active.dark {
  @apply border-purple-500 text-gray-900
}


.backdrop-filter {
  /*backdrop-filter: blur(8px);*/
  background-color: rgba(255, 255, 255, 0.99);
  @apply shadow-sm
}
@supports (backdrop-filter: none) {
  .backdrop-filter {
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px);
  }
}

</style>
