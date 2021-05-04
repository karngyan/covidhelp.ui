<template>
<div class="my-10">
  <VerifyEmail/>
  <UpdatePostForm :id="id"/>
</div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    user() {
      return this.$store.state.user
    },
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
