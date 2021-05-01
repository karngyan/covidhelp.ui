<template>
<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <nuxt-link to="/">
      <Logo class="mx-auto h-16 w-auto text-purple-700" />
    </nuxt-link>
    <h2 class="mt-3 text-center text-3xl font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <nuxt-link to="/volunteer" class="font-medium text-indigo-600 hover:text-indigo-500">
        Sign up as a volunteer
      </nuxt-link>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-5 shadow sm:rounded-lg sm:px-6">
      <form @submit.prevent="signInUser" class="">
        <b-field label="Email">
          <b-input type="email" v-model="email"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password" v-model="password" minlength="6" password-reveal></b-input>
        </b-field>
        <b-button class="mt-8" :disabled="!validateForm" native-type="submit" type="is-primary" expanded :loading="loading">Sign In</b-button>
      </form>
    </div>
  </div>
</div>

</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  computed: {
    validateForm() {
      return this.email.length > 0 && this.password.length >= 6
    }
  },
  methods: {
    signInUser() {
      const store = this.$store
      this.loading = true
      store.dispatch('signInUserWithEmailAndPassword', {email: this.email, password: this.password})
        .then((data) => {
          console.debug('user fetched', data)
          store.dispatch('success', 'Signed in successfully!')
          this.loading = false
          this.$router.push('/dashboard')
        }).catch((error) => {
          console.error(error)
          store.dispatch('danger', error.toString())
          this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
