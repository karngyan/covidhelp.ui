<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="my-10">
  <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Subdomains (State Wise)</h2>
  <a href="https://jharkhand.covidhelp.page" class="cursor-pointer mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <li class="col-span-1 flex shadow-sm rounded-md">
      <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
        JH
      </div>
      <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div class="flex-1 px-4 py-2 text-sm truncate">
          <div href="#" class="text-gray-900 font-medium hover:text-gray-600">Jharkhand</div>
          <p class="text-gray-500">0 Donors</p>
        </div>
      </div>
    </li>

  </a>
</div>

</template>

<script>
export default {
name: "Subdomains",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
