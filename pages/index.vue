<template>
<div>
<div class="relative bg-gray-50 overflow-hidden">
  <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
    <div class="relative h-full max-w-7xl mx-auto">
      <svg class="animate-pulse absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg class="absolute animate-pulse left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
      </svg>
    </div>
  </div>

  <div class="mx-auto z-10 py-16 grid grid-cols-1 gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
    <section aria-labelledby="right section" class="lg:col-start-1 lg:col-span-2">
      <div class="relative pb-16">
        <main class="mx-auto max-w-7xl px-4">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">{{ $t('home.heroOne') }}</span>
              <span class="block text-purple-600 xl:inline">{{ $t('home.heroTwo') }}</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
               {{ $t('home.taglineOne') }} 🇮🇳
            </p>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">{{ $t('home.taglineTwo') }}</p>
          </div>

          <div class="flex py-5 items-center justify-center">
            <span class="relative z-0 inline-flex shadow-sm rounded-md">
              <nuxt-link :to="localePath('/donor')" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-purple-300 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
                {{ $t('home.becomeDonor') }}
              </nuxt-link>
              <nuxt-link :to="localePath('/beneficiary')" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-purple-300 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
                {{ $t('home.becomeBeneficiary') }}
              </nuxt-link>
              <nuxt-link :to="localePath('/volunteer')" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-purple-300 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
                {{ $t('home.becomeVolunteer') }}
              </nuxt-link>
            </span>
          </div>
        </main>
      </div>
    </section>
    <div class="space-y-2 z-10 lg:col-start-3 lg:col-span-1">
      <div class="bg-purple-800 shadow-md rounded-lg px-4 py-2 border-b border-gray-200 sm:px-6">
        <nuxt-link :to="localePath('/feed')" class="animate-pulse relative text-md leading-6 font-bold hover:text-white text-white">
          {{ $t('home.postFeed') }}
        </nuxt-link>
      </div>
      <ul>
        <nuxt-link :to="localePath('/feed')" class="space-y-1">
          <PostSmallCard v-for="(post, index) in posts" :key="index" :post="post"/>
        </nuxt-link>
      </ul>
    </div>

  </div>

</div>

<div class="pb-24 bg-white">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Covid HELP India Features That we are working on.</h2>
    <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <dt>
          <div class="flex items-center justify-center rounded-md text-white">
            <img src="../assets/one.png" alt="automated donor matching"/>
          </div>
          <p class="mt-5 text-xl leading-6 font-extrabold text-center text-purple-900">{{ $t('home.one') }}</p>
        </dt>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center rounded-md text-white">
            <img src="../assets/two.png" alt="automated donor matching"/>
          </div>
          <p class="mt-5 text-xl leading-6 font-extrabold text-center text-purple-900">{{ $t('home.two') }}</p>
        </dt>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center rounded-md text-white">
            <img src="../assets/three.png" alt="automated donor matching"/>
          </div>
          <p class="mt-5 text-xl leading-6 font-extrabold text-center text-purple-900">{{ $t('home.three') }}</p>
        </dt>
      </div>
    </dl>
  </div>
</div>


<div class="bg-purple-800">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        {{ $t('home.statistics') }}
      </h2>
      <p class="mt-3 text-xl text-purple-200 sm:mt-4">
        {{ $t('home.statisticsTagline') }}
      </p>
    </div>
    <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
      <div class="flex flex-col">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          {{ $t('home.postCount') }}
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-white">
          {{ postCount }}
        </dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          {{ $t('home.donors') }}
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-white">
          {{ donorCount }}
        </dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          {{ $t('home.beneficiaries') }}
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-white">
          {{ beneficiaryCount }}
        </dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          {{ $t('home.volunteers') }}
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-white">
          {{ volunteerCount }}
        </dd>
      </div>
    </dl>
  </div>
</div>




</div>

</template>

<script>
export default {
  data() {
    return {
      volunteerCount: '...',
      donorCount: '...',
      beneficiaryCount: '...',
      postCount: '...',
      posts: [],
    }
  },
  created() {
    this.$store.dispatch('fetchOverallStats')
      .then((data) => {
        this.volunteerCount = data.volunteerCount
        this.donorCount = data.donorCount
        this.beneficiaryCount = data.beneficiaryCount
        this.postCount = data.postCount
      })
    this.$store.dispatch('fetchPosts', {tag: '', page: 1, city: ''})
      .then((data) => {
        console.debug(data)
        this.posts = data.posts.slice(0, 3)
      }).catch(error => {
        this.$store.dispatch('danger', 'fetch feed failed')
    })
  }
}
</script>

<style>
</style>
