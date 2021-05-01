<template>
<div>
<div class="relative bg-gray-50 overflow-hidden">
  <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
    <div class="relative h-full max-w-7xl mx-auto">
      <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
      </svg>
    </div>
  </div>

  <div class="relative pb-16">
    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Help people</span>
          <span class="block text-purple-600 xl:inline">in need</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We are a group of volunteers helping people get over this COVID-19 crisis. We notify donors and beneficiaries via email and sms.
        </p>
      </div>

      <div class="flex py-5 items-center justify-center">
        <span class="relative z-0 inline-flex shadow-sm rounded-md">
          <nuxt-link to="/donor" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-purple-300 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
            Become a Donor
          </nuxt-link>
          <nuxt-link to="/beneficiary" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-purple-300 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
            Request Blood/Plasma
          </nuxt-link>
          <nuxt-link to="/volunteer" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-purple-300 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
            Become a Volunteer
          </nuxt-link>
        </span>
      </div>
    </main>
  </div>
</div>

<div class="bg-purple-800">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        Statistics
      </h2>
      <p class="mt-3 text-xl text-purple-200 sm:mt-4">
        Help save lives in this situation.
      </p>
    </div>
    <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
      <div class="flex flex-col">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          Donors
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-white">
          {{ donorCount }}
        </dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          Beneficiaries
        </dt>
        <dd class="order-1 text-5xl font-extrabold text-white">
          {{ beneficiaryCount }}
        </dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
          Volunteers
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
      beneficiaryCount: '...'
    }
  },
  created() {
    this.$store.dispatch('fetchSubdomainDetails', {subdomain: 'jharkhand'})
      .then((data) => {
        this.volunteerCount = data.volunteerCount
        this.donorCount = data.donorCount
        this.beneficiaryCount = data.beneficiaryCount
      })
  }
}
</script>

<style>
</style>
