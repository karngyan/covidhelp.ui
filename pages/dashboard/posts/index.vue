<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="px-4 mt-10 flex items-center justify-between sm:px-0">
      <div :class="previousDisabled ? 'hover:text-gray-800 text-gray-800' : 'hover:text-purple-500 text-gray-500 cursor-pointer'" class="-mt-px w-0 flex-1 flex">
        <div @click="previousClicked" class="border-transparent pr-1 inline-flex items-center font-bold focus:ring-transparent focus:outline-none focus:ring-offset-transparent">
          <!-- Heroicon name: solid/arrow-narrow-left -->
          <svg class="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          previous
        </div>
      </div>
      <div class="hidden items-center justify-center md:-mt-px md:flex font-bold text-gray-500">
        <span>{{'page ' + this.page + ' of ' + this.maxPage }}</span>
      </div>
      <div :class="nextDisabled ? 'hover:text-gray-800 text-gray-800' : 'hover:text-purple-500 text-gray-500 cursor-pointer'" class="-mt-px w-0 flex-1 flex justify-end">
        <div @click="nextClicked" class="border-transparent pl-1 inline-flex items-center font-bold focus:ring-transparent focus:outline-none focus:ring-offset-transparent">
          next
          <!-- Heroicon name: solid/arrow-narrow-right -->
          <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </nav>

    <div>
      <ul class="nav pt-5 pb-5 space-y-2">
        <Post v-for="post in posts" :key="post.id" :post="post" :actions="true"/>
      </ul>
    </div>

  <nav class="px-4 flex pb-6 items-center justify-between sm:px-0">
    <div :class="previousDisabled ? 'hover:text-gray-800 text-gray-800' : 'hover:text-purple-500 text-gray-500 cursor-pointer'" class="-mt-px w-0 flex-1 flex">
      <div @click="previousClicked" class="border-transparent pr-1 inline-flex items-center font-bold focus:ring-transparent focus:outline-none focus:ring-offset-transparent">
        <!-- Heroicon name: solid/arrow-narrow-left -->
        <svg class="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        previous
      </div>
    </div>
    <div class="hidden items-center justify-center md:-mt-px md:flex font-bold text-gray-500">
      <span>{{'page ' + this.page + ' of ' + this.maxPage }}</span>
    </div>
    <div :class="nextDisabled ? 'hover:text-gray-800 text-gray-800' : 'hover:text-purple-500 text-gray-500 cursor-pointer'" class="-mt-px w-0 flex-1 flex justify-end">
      <div @click="nextClicked" class="border-transparent pl-1 inline-flex items-center font-bold focus:ring-transparent focus:outline-none focus:ring-offset-transparent">
        next
        <!-- Heroicon name: solid/arrow-narrow-right -->
        <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </nav>


  </div>

</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    posts() {
      return this.$store.state.postsByUser
    },
    user() {
      return this.$store.state.user
    },
    previousDisabled() {
      return this.page === this.minPage
    },
    nextDisabled() {
      return this.page === this.maxPage
    },
  },
  data() {
    return {
      page: 1,
      maxPage: 1,
      minPage: 1,
    }
  },
  methods: {
    previousClicked() {
      if (this.page !== this.minPage) {
        this.fetchPosts(this.page - 1)
      }
    },
    nextClicked() {
      if (this.page !== this.maxPage) {
        this.fetchPosts(this.page + 1)
      }
    },
    fetchPosts(page = 1) {
      const store = this.$store
      this.page = page
      store.dispatch('fetchAllPostsForUser', {page: this.page})
        .then((data) => {
          this.minPage = data.minPage
          this.maxPage = data.maxPage
        }).catch((error) => {
          store.dispatch('danger', 'some error occurred ' + error.toString())
      })
    }
  },
  created() {
    if (this.user) {
      this.fetchPosts()
    }
  },
  watch: {
    user() {
      this.fetchPosts()
    }
  }
}
</script>

<style scoped>

</style>
