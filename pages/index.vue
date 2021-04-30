<template>

<div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
  <div class="md:flex md:items-center md:justify-center md:space-x-5">
    <div class="flex items-start space-x-5">
      <div class="flex-shrink-0">
        <div class="relative">
          <Logo class="h-16 w-16"/>
        </div>
      </div>
      <div class="pt-1.5">
        <h1 class="text-2xl font-bold text-gray-900">covidhelp.page</h1>
        <p class="text-sm font-medium text-gray-500">click on respective subdomains to access help</p>
      </div>
    </div>
  </div>

  <Subdomains/>
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
