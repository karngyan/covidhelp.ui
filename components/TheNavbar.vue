<template>
<nav class="sticky top-0 w-full bg-white z-40 backdrop-filter border-b border-gray-200 shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex pr-2 lg:px-0">
        <nuxt-link :to="localePath('/')" class="flex-shrink-0 flex items-center space-x-1">
          <Logo class="text-purple-700 h-10 w-10" alt="Logo" />
          <span class="font-bold">{{ $t('nav.name') }}</span>
        </nuxt-link>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <nuxt-link v-show="$store.state.user"  :to="localePath('/dashboard')" class="dark border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            {{ $t('nav.dashboard') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/feed')" class="dark border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            {{ $t('nav.feed') }}
          </nuxt-link>
        </div>
      </div>


      <div class="flex flex-row space-x-6">

        <a v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)" class="justify-center hidden sm:flex items-center">
          <b-button type="is-primary">{{ locale.name }}</b-button>
        </a>
        <nuxt-link v-if="!$store.state.user" :to="localePath('/login')" class="justify-center flex items-center">
          <b-button type="is-primary is-light">{{ $t('nav.signIn') }}</b-button>
        </nuxt-link>
        <div v-else class="justify-center flex items-center">
          <b-button @click="signOutUser" type="is-primary is-light">{{ $t('nav.signOut') }}</b-button>
        </div>
      </div>

    </div>

    <div class="w-full flex items-center justify-center sm:ml-6 sm:hidden space-x-4 sm:space-x-8">
      <nuxt-link v-show="$store.state.user" :to="localePath('/dashboard')" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        {{ $t('nav.dashboard') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/feed')" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        {{ $t('nav.feed') }}
      </nuxt-link>
      <a v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        {{ locale.name }}
      </a>
    </div>

  </div>
</nav>


</template>

<script>
export default {
  name: "Header",
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    signOutUser() {
      const store = this.$store
      store.dispatch('signOut')
    },
    setLocale(code) {
      this.$store.dispatch('switchLocale', {code: code})
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
