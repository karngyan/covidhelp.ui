<template>
<div class="relative bg-purple-600">
  <div class="max-w-7xl mx-auto py-1.5 px-3 sm:px-6 lg:px-8">
    <div class="pr-16 sm:text-center sm:px-16">
      <p class="font-medium text-white">
        <span class="md:hidden">
          {{ $t('banner.mobile')}}
        </span>
        <span class="hidden md:inline">
          {{ $t('banner.web')}}
        </span>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "TheBanner"
}
</script>

<style scoped>

</style>
