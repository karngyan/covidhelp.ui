<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div v-show="!done" class="max-w-3xl mx-auto space-y-4">

    <div class="relative  pb-6 pt-28">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Donor Form
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        Form is for both Blood and Plasma donors. Plasma donors are requested to provide COVID history in the form.
      </p>
    </div>

    <b-field
      label="Donor Preference">
      <b-select placeholder="Select one" expanded v-model="preference">
        <option value="0">Plasma</option>
        <option value="1">Blood</option>
        <option value="2">Both</option>
      </b-select>
    </b-field>

    <b-field label="Name">
      <b-input class="rounded-md border-gray-200" placeholder="Enter your full name" v-model="name"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input placeholder="Enter your email address" v-model="email" type="email"></b-input>
    </b-field>

    <b-field label="Phone Number">
      <b-input placeholder="Enter your active phone number" v-model="phone" type="tel"></b-input>
    </b-field>

    <b-field label="Whatsapp Number">
      <b-input placeholder="Enter your active phone number" v-model="whatsappNumber" type="text"></b-input>
    </b-field>

    <b-field>
      <b-checkbox v-model="whatsappCheck">
        Same as phone number
      </b-checkbox>
    </b-field>

    <b-field
      label="Gender">
      <b-select placeholder="Select one" expanded v-model="gender">
        <option value="F">Female</option>
        <option value="M">Male</option>
        <option value="O">Others</option>
      </b-select>
    </b-field>

    <b-field label="City">
      <b-select placeholder="Select one" expanded v-model="city">
        <option v-for="city in cities" :value="city.city" :key="city.city">{{ city.city }}</option>
      </b-select>
    </b-field>

    <b-field label="Blood Group">
      <b-select placeholder="Select one" expanded v-model="bloodGroup">
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </b-select>
    </b-field>

    <b-field label="Height (in cms)">
      <b-numberinput v-model="heightInCm"></b-numberinput>
    </b-field>

    <b-field label="Weight (in kgs)">
      <b-numberinput v-model="weightInKgs"></b-numberinput>
    </b-field>

    <b-field label="Age (in years)">
      <b-numberinput v-model="age"></b-numberinput>
    </b-field>

    <b-field label="When were you tested positive? (optional for blood donors)">
        <b-datepicker v-model="covidInfectedStart"
            :first-day-of-week="1"
            placeholder="Click to select a date">

            <b-button
                label="Today"
                type="is-primary"
                icon-left="calendar-today"
                @click="covidInfectedStart = new Date()" />
        </b-datepicker>
    </b-field>

    <b-field>
      <b-checkbox v-model="vaccinated">
        Have you been vaccinated?
      </b-checkbox>
    </b-field>

    <b-field v-show="vaccinated" label="Please share the vaccination date..">
        <b-datepicker v-model="vaccinationDate"
            :first-day-of-week="1"
            placeholder="Click to select vaccination date">

            <b-button
                label="Today"
                type="is-primary"
                icon-left="calendar-today"
                @click="vaccinationDate = new Date()" />
        </b-datepicker>
    </b-field>



    <b-field label="Since when have you been symptom free? (Please enter number of days)">
      <b-numberinput v-model="symptomFreeDays"></b-numberinput>
    </b-field>

    <div class="submit py-4">
      <b-field>
        <b-checkbox v-model="consentToShare">
          I give consent to share my information for donor matching only.
        </b-checkbox>
      </b-field>

      <b-button @click="submitForm" :disabled="!consentToShare" type="is-primary" expanded :loading="loading">Submit</b-button>
    </div>
  </div>
  <div v-show="done" class="max-w-3xl mx-auto space-y-4">
    <div class="h-screen -my-10 space-y-2 flex flex-col items-center justify-center relative">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Donor Registered Successfully!
      </h2>
      <p class="max-w-3xl mx-auto text-center text-xl text-gray-500">
        Thank you so much for contributing. Please turn your email notifications on. :)
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
      gender: 'M',
      bloodGroup: 'A+',
      heightInCm: 150,
      weightInKgs: 70,
      city: 'Ranchi',
      subdomain: 'jharkhand',
      age: 25,
      covidInfected: true,
      covidInfectedStart: null,
      covidInfectedEnd: null,
      symptomFreeDays: 1,
      vaccinated: false,
      vaccinationDate: null,
      whatsappCheck: false,
      consentToShare: true,
      loading: false,
      cities: cities,
      preference: '0',
      done: false,
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

      if (form.covidInfectedStart)
        form.covidInfectedStart = new Date(this.covidInfectedStart).getTime() * 1000000
      else
        form.covidInfectedStart = 0
      if (form.vaccinationDate)
        form.vaccinationDate = new Date(this.covidInfectedStart).getTime() * 1000000
      else
        form.vaccinationDate = 0

      form.preference = parseInt(form.preference)

      console.debug(form)
      store.dispatch('submitDonorForm', form)
        .then(() => {
          this.$store.dispatch('success', 'Donor registered successfully!')
          this.loading = false
          this.done = true
        }).catch(error => {
          this.$store.dispatch('danger', error.response.data)
          this.loading = false
        })
    },
  }
}
</script>

<style scoped>

</style>
