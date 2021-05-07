<template>
<div>
  <div v-show="menuOpen" class="fixed inset-0 flex z-50 md:hidden" role="dialog" aria-modal="true">
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="menuOpen" class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
    </transition>

    <transition
      enter-active-class="transition ease-in-out duration-300 transform"
      enter-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-300 transform"
      leave-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div v-show="menuOpen" class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <transition
          enter-active-class="ease-in-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in-out duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button @click="menuOpen = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Close sidebar</span>
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </transition>

        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex-shrink-0 flex items-center px-2 space-x-2">
            <nuxt-link :to="localePath('/')">
              <Logo class="h-10 w-auto text-purple-700"/>
            </nuxt-link>
            <h3 class="font-bold text-lg">{{ $t('nav.name') }}</h3>
          </div>
          <nav @click="menuOpen = false" class="mt-5 px-2 space-y-1">
            <nuxt-link :to="localePath('/donor')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
              </svg>
              {{ $t('home.becomeDonor') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/beneficiary')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              {{ $t('home.becomeBeneficiary') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/volunteer')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" />
              </svg>
              {{ $t('home.becomeVolunteer') }}
            </nuxt-link>

            <nuxt-link :to="localePath('/feed')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"  viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
              {{ $t('nav.feed') }}
            </nuxt-link>
            <div class="border-b border-gray-200"></div>

            <nuxt-link :to="localePath('/feedback')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
              </svg>
              {{ $t('footer.feedback') }}
            </nuxt-link>

            <nuxt-link :to="localePath('/team')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              {{ $t('footer.team') }}
            </nuxt-link>


            <div class="border-b border-gray-200"></div>

            <a v-for="locale in allLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              {{ locale.name }}
            </a>

          </nav>
        </div>
      </div>
    </transition>

    <div class="flex-shrink-0 w-14"></div>
  </div>

  <nav class="sticky top-0 w-full bg-white z-40 backdrop-filter border-b border-gray-200 shadow">
    <div class="max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex pr-2 lg:px-0 flex justify-between">
          <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 flex items-center">
            <button @click="menuOpen = true" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open sidebar</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nuxt-link :to="localePath('/')" class="flex-shrink-0 flex items-center space-x-1">
            <Logo class="text-purple-700 h-10 w-10" alt="Logo" />
            <span class="font-bold">{{ $t('nav.name') }}</span>
          </nuxt-link>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <nuxt-link v-show="$store.state.user"  :to="localePath('/dashboard')" class="dark border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              {{ $t('nav.dashboard') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/feed')" class="dark border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              {{ $t('nav.feed') }}
            </nuxt-link>
          </div>
        </div>


        <div class="flex flex-row space-x-6">

          <nuxt-link v-if="!$store.state.user" :to="localePath('/login')" class="hidden md:flex justify-center items-center">
            <b-button type="is-primary is-light">{{ $t('nav.signIn') }}</b-button>
          </nuxt-link>
          <div v-else class="hidden md:flex justify-center items-center">
            <b-button @click="signOutUser" type="is-primary is-light">{{ $t('nav.signOut') }}</b-button>
          </div>

          <nuxt-link v-if="!$store.state.user" :to="localePath('/login')" class="justify-center flex md:hidden items-center">
            <b-button type="is-primary is-light" size="is-small">{{ $t('nav.signIn') }}</b-button>
          </nuxt-link>
          <div v-else class="justify-center flex md:hidden items-center">
            <b-button @click="signOutUser" type="is-primary is-light" size="is-small">{{ $t('nav.signOut') }}</b-button>
          </div>

          <div class="flex flex-row space-x-0.5">
            <!-- Simple One click toggle for English/Hindi -->
            <a v-for="locale in defaultLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)" class="justify-center hidden md:flex items-center">
              <b-button type="is-primary">{{ locale.name }}</b-button>
            </a>

            <b-dropdown aria-role="list" class="justify-center hidden md:flex items-center">
              <template #trigger="{ active }">
                <b-button
                label=""
                type="is-primary"
                :icon-right="active ? 'menu-up' : 'menu-down'" />
              </template>
              <b-dropdown-item v-for="locale in availableLocales"
                               @click="setLocale(locale.code)"
                               :key="locale.code" aria-role="listitem">
                {{ locale.name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>


        </div>

      </div>

  <!--    <div class="w-full flex items-center justify-center md:ml-6 md:hidden space-x-4 md:space-x-8">-->
  <!--      <nuxt-link v-show="$store.state.user" :to="localePath('/dashboard')" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">-->
  <!--        {{ $t('nav.dashboard') }}-->
  <!--      </nuxt-link>-->
  <!--      <nuxt-link :to="localePath('/feed')" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">-->
  <!--        {{ $t('nav.feed') }}-->
  <!--      </nuxt-link>-->
  <!--      <a v-for="locale in allLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)" class="dark pb-3 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">-->
  <!--        {{ locale.name }}-->
  <!--      </a>-->
  <!--    </div>-->

    </div>
  </nav>
</div>

</template>

<script>
export default {
  name: "TheNavbar",
  computed: {
    hindi() {
      return this.$i18n.locales.filter(i => i.code === this.hindiLocaleCode)
    },
    english() {
      return this.$i18n.locales.filter(i => i.code === this.englishLocaleCode)
    },
    defaultLocales() {
      if (this.$i18n.locale === this.englishLocaleCode) {
        return this.hindi
      }
      return this.english
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale && !this.defaultLocales.includes(i))
    },
    allLocales() {
      return this.$i18n.locales
    }
  },
  data() {
    return {
      menuOpen: false,
      hindiLocaleCode: 'hi',
      englishLocaleCode: 'en'
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
  },
  created() {
    console.debug('asdfasf', this.defaultLocales)
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
