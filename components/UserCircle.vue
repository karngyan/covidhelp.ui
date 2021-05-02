<template>
  <div class="rounded-full flex justify-center items-center h-9 w-9 bg-purple-700">
    <span class="text-white font-extrabold">{{ (name.charAt(0) + name.charAt(1)).toUpperCase() }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '...'
    }
  }
}
</script>

<style scoped>

</style>
