<template>
  <div>
    <div v-if="user && !user.verified" class="flex flex-row items-center justify-center space-x-5">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
    <span class="text-center">
      Please verify your email to start volunteering.
    </span>
    <button class="text-purple-700 hover:text-purple-800" @click="sendVerificationEmail">
      Resend verification email
    </button>
    </div>
    <div v-if="user && user.verified" class="flex flex-row items-center justify-center space-x-5">
      <svg xmlns="http://www.w3.org/2000/svg"class="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      <span class="text-center">
        Your email is verified.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    sendVerificationEmail() {
      this.$store.dispatch('sendVerificationEmail')
    }
  },
}
</script>

<style scoped>

</style>
