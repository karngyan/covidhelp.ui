<template>
  <div>
    <div class="h-screen flex overflow-hidden bg-gray-100">
      <div v-show="menuOpen" class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
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
              <div class="flex-shrink-0 flex items-center px-2 space-x-1">
                <nuxt-link :to="localePath('/')">
                  <Logo class="h-10 w-auto text-purple-700"/>
                </nuxt-link>
                <h3 class="font-bold text-lg">Dashboard</h3>
              </div>
              <nav @click="menuOpen = false" class="mt-5 px-2 space-y-1">
                <nuxt-link exact :to="localePath('/dashboard')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </nuxt-link>

                <nuxt-link :to="localePath('/dashboard/create-post')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                  </svg>
                  Create a post
                </nuxt-link>

                <nuxt-link :to="localePath('/dashboard/posts')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                  My posts
                </nuxt-link>

                <nuxt-link :to="localePath('/dashboard/approve-beneficiaries')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Approve Beneficiaries
                </nuxt-link>

                <nuxt-link :to="localePath('/feed')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"  viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                    <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                  Feed
                </nuxt-link>

                <div @click="signOutUser" class="cursor-pointer active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                  </svg>
                  Sign out
                </div>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <UserCircle :name="user.volunteer.name"/>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {{ titleCase(user.volunteer.name ) }}
                    </p>
                    <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      {{ user.type === 0 ? 'Volunteer' : 'Not Volunteer' }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </transition>

        <div class="flex-shrink-0 w-14"></div>
      </div>

      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div class="flex items-center flex-shrink-0 space-x-1 px-2">
                <nuxt-link :to="localePath('/')">
                  <Logo class="h-10 w-auto text-purple-700"/>
                </nuxt-link>
                <h3 class="font-bold text-lg">Dashboard</h3>
              </div>
              <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
                <nuxt-link exact :to="localePath('/dashboard')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </nuxt-link>

                <nuxt-link :to="localePath('/dashboard/create-post')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                  </svg>
                  Create a post
                </nuxt-link>
                <nuxt-link :to="localePath('/dashboard/posts')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                  My posts
                </nuxt-link>

                <nuxt-link :to="localePath('/dashboard/approve-beneficiaries')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Approve Beneficiaries
                </nuxt-link>

                <nuxt-link :to="localePath('/feed')" class="active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"  viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                    <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                  Feed
                </nuxt-link>

                <div @click="signOutUser" class="cursor-pointer active-tab text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <svg class="active-svg text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                  </svg>
                  Sign out
                </div>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">

              <div class="flex-shrink-0 w-full group block">
                <div class="flex items-center">
                  <div class="rounded-full flex justify-center items-center h-9 w-9 bg-purple-700">
                    <span v-if="user" class="text-white font-extrabold">{{ (user.volunteer.name.charAt(0) + user.volunteer.name.charAt(1)).toUpperCase() }}</span>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {{ titleCase(user.volunteer.name ) }}
                    </p>
                    <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      {{ user.type === 0 ? 'Volunteer' : 'Not Volunteer' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button @click="menuOpen = true" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open sidebar</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div class="">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Nuxt />
            </div>
          </div>
        </main>
      </div>
    </div>

    <Notification />
    <Archive />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      const user = this.$store.state.user
      return user ? user : {
        type: 0,
        volunteer: {
          name: 'Loading...',
        }
      }
    }
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    titleCase(str) {
      return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      }).join(' ');
    },
    signOutUser() {
      const store = this.$store
      store.dispatch('signOut')
    }
  }
}
</script>

<style scoped>
.nuxt-link-active.active-tab {
  @apply bg-gray-100 text-gray-900
}

.nuxt-link-active.active-tab.active-svg {
  @apply text-gray-500
}
</style>
