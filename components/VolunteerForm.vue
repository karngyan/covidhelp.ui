<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div v-show="!done" class="max-w-3xl mx-auto space-y-4">

    <div class="relative pb-6 pt-28">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Volunteer Form
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        Help us in quickly matching donors to people in need. This is grunt work. Calling out people with empathy.
      </p>
    </div>

    <b-field label="Name">
      <b-input class="rounded-md border-gray-200" placeholder="Enter your full name" v-model="name"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input placeholder="Enter your email address" v-model="email" type="email"></b-input>
    </b-field>

    <b-field label="Phone Number">
      <b-input placeholder="Enter your active phone number" v-model="phone" type="text"></b-input>
    </b-field>

    <b-field label="Whatsapp Number">
      <b-input placeholder="Enter your active phone number" v-model="whatsappNumber" type="text"></b-input>
    </b-field>

    <b-field>
      <b-checkbox v-model="whatsappCheck">
        Same as phone number
      </b-checkbox>
    </b-field>

    <b-field label="City">
      <b-select placeholder="Select one" expanded v-model="city">
        <option v-for="city in cities" :value="city.city" :key="city.city">{{ city.city }}</option>
      </b-select>
    </b-field>

    <b-field label="How many hours per week can you contribute?">
      <b-numberinput v-model="hoursPerWeek"></b-numberinput>
    </b-field>

    <b-field label="Enter new password (min length: 6)">
      <b-input type="password" password-reveal v-model="password"></b-input>
    </b-field>

    <div class="submit py-4">
      <b-field>
        <b-checkbox v-model="consentToShare">
          I give consent to share my information with COVID Help for volunteer work.
        </b-checkbox>
      </b-field>

      <b-button @click="submitForm" :disabled="!consentToShare" type="is-primary" expanded :loading="loading">Sign Up</b-button>
    </div>
  </div>
  <div v-show="done" class="max-w-3xl mx-auto space-y-4">
    <div class="h-screen space-y-2 -py-10 flex flex-col items-center justify-center relative">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Volunteer Registered Successfully!
      </h2>
      <p class="max-w-3xl mx-auto text-center text-xl text-gray-500">
        Thank you for your interest. We'll reach out shortly. :)
      </p>
    </div>
  </div>
</div>
</template>

<script>
import cities from "@/assets/cities"

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      whatsappNumber: '',
      gender: '',
      city: 'Ranchi',
      subdomain: 'jharkhand',
      whatsappCheck: false,
      consentToShare: true,
      loading: false,
      cities: cities,
      hoursPerWeek: 10,
      done: false,
      password: '',
      token: ''
    }
  },
  watch: {
    whatsappCheck(newValue) {
      if (newValue) {
        this.whatsappNumber = this.phone
      }
    },
    phone(newValue) {
      if (this.whatsappCheck) {
        this.whatsappNumber = newValue
      }
    },
    whatsappNumber(newValue) {
      if (this.whatsappCheck) {
        this.phone = newValue
      }
    },
  },
  methods: {
    submitForm() {
      const store = this.$store
      this.loading = true
      const form = {...this.$data}

      console.debug(form)
      if (form.email === '' || form.password.length < 6) {
        this.$store.dispatch('danger', 'Please fill all the details!')
        this.loading = false
        return
      }

      store.dispatch('setSignUpState', true)
        .then(() => {
          store.dispatch('signUpWithEmailAndPassword', {email: form.email, password: form.password})
            .then(async (data) => {
              const token = await this.$fire.auth.currentUser.getIdToken(true)
              form.token = token
              store.dispatch('submitVolunteerForm', form)
                .then(() => {
                  this.$store.dispatch('success', 'Volunteer registered successfully!')
                  this.loading = false
                  this.done = true
                  this.$router.push('/dashboard')
                  store.dispatch('setSignUpState', false)
                }).catch(error => {
                this.$store.dispatch('danger',error.response.data)
                this.loading = false
                store.dispatch('setSignUpState', false)
              })
            })
            .catch((error) => {
              this.loading = false
              this.$store.dispatch('danger', 'Some error occurred! Please try again in a minute.')
              store.dispatch('setSignUpState', false)
            })
        })


    }
  }
}
</script>

<style scoped>

</style>
