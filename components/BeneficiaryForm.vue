<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">

    <div class="py-8">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Beneficiary Form
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        We'll try our best to match you with someone. Keep checking your email.
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

    <b-field
      label="Gender">
      <b-select placeholder="Select one" expanded v-model="gender">
        <option value="F">Female</option>
        <option value="M">Male</option>
        <option value="O">Others</option>
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

    <b-field label="When were you tested positive?">
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
      <b-checkbox v-model="vaccinated" type="is-success">
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

    <div class="submit pb-8 pt-5">
      <b-button type="is-primary" expanded :loading="loading">Submit</b-button>
    </div>
  </div>
</div>
</template>

<script>
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
      city: '',
      subdomain: 'jharkhand',
      age: 25,
      covidInfected: true,
      covidInfectedStart: '',
      covidInfectedEnd: new Date(),
      symptomFreeDays: 1,
      vaccinated: false,
      vaccinationDate: '',
      whatsappCheck: false,
      loading: false
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
}
</script>

<style scoped>

</style>
