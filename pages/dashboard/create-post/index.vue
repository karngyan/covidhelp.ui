<template>
<div class="my-10">
  <VerifyEmail/>
  <CreatePostForm />
</div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>
