<template>

<div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        <span class="block">Help people in need.</span>
        <span class="block text-gray-700">Make sure you enter valid information only.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-yellow-600">We are a group of volunteers helping people get over this COVID-19 crisis. We notify donors and beneficiaries via email and sms.</p>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex py-6 items-center justify-center">
    <span class="relative z-0 inline-flex shadow-sm rounded-md">
      <button to="/donor" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500">
        Become a Donor
      </button>
      <button to="/beneficiary" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500">
        Request Blood/Plasma
      </button>
      <button to="/volunteer" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500">
        Become a Volunteer
      </button>
    </span>
      </div>
    </div>
  </div>



</div>


</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {Logo}
}
</script>

<style>
</style>
