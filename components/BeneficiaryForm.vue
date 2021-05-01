<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div v-show="!done" class="max-w-3xl mx-auto space-y-4">

    <div class="relative my-6">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Beneficiary Form
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        We'll try our best to match you with a donor. Keep checking your mail.
      </p>
    </div>

    <b-field
      label="Request Type">
      <b-select placeholder="Select one" expanded v-model="type">
        <option value="0">Plasma</option>
        <option value="1">Blood</option>
      </b-select>
    </b-field>

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

    <b-field label="Report Link">
      <b-input placeholder="upload the COVID report on Google drive and share the public link" v-model="reportUrl" type="text"></b-input>
    </b-field>

    <div class="submit py-4">
      <b-field>
        <b-checkbox v-model="consentToShare">
          I give consent to share my information for donor matching only.
        </b-checkbox>
      </b-field>

      <b-button @click="submitForm" type="is-primary" :disabled="!consentToShare" expanded :loading="loading">Submit</b-button>
    </div>
  </div>
  <div v-show="done" class="max-w-3xl mx-auto space-y-4">
    <div class="h-screen space-y-2 -my-10 flex flex-col items-center justify-center relative">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Donor Request Submitted Successfully!
      </h2>
      <p class="max-w-3xl mx-auto text-center text-xl text-gray-500">
        We're trying our best to find a donor for you. Please turn your email notifications on and stay strong :)
      </p>
    </div>
  </div>
</div>
</template>

<script>

const cities = [
  {"city":"Amlabad", "state":"Jharkhand"},
	{"city":"Ara", "state":"Jharkhand"},
	{"city":"Barughutu", "state":"Jharkhand"},
	{"city":"Bokaro Steel City", "state":"Jharkhand"},
	{"city":"Chaibasa", "state":"Jharkhand"},
	{"city":"Chakradharpur", "state":"Jharkhand"},
	{"city":"Chandrapura", "state":"Jharkhand"},
	{"city":"Chatra", "state":"Jharkhand"},
	{"city":"Chirkunda", "state":"Jharkhand"},
	{"city":"Churi", "state":"Jharkhand"},
	{"city":"Daltonganj", "state":"Jharkhand"},
	{"city":"Deoghar", "state":"Jharkhand"},
	{"city":"Dhanbad", "state":"Jharkhand"},
	{"city":"Dumka", "state":"Jharkhand"},
	{"city":"Garhwa", "state":"Jharkhand"},
	{"city":"Ghatshila", "state":"Jharkhand"},
	{"city":"Giridih", "state":"Jharkhand"},
	{"city":"Godda", "state":"Jharkhand"},
	{"city":"Gomoh", "state":"Jharkhand"},
	{"city":"Gumia", "state":"Jharkhand"},
	{"city":"Gumla", "state":"Jharkhand"},
	{"city":"Hazaribag", "state":"Jharkhand"},
	{"city":"Hussainabad", "state":"Jharkhand"},
	{"city":"Jamshedpur", "state":"Jharkhand"},
	{"city":"Jamtara", "state":"Jharkhand"},
	{"city":"Jhumri Tilaiya", "state":"Jharkhand"},
	{"city":"Khunti", "state":"Jharkhand"},
	{"city":"Lohardaga", "state":"Jharkhand"},
	{"city":"Madhupur", "state":"Jharkhand"},
	{"city":"Mihijam", "state":"Jharkhand"},
	{"city":"Musabani", "state":"Jharkhand"},
	{"city":"Pakaur", "state":"Jharkhand"},
	{"city":"Patratu", "state":"Jharkhand"},
	{"city":"Phusro", "state":"Jharkhand"},
	{"city":"Ramngarh", "state":"Jharkhand"},
	{"city":"Ranchi", "state":"Jharkhand"},
	{"city":"Sahibganj", "state":"Jharkhand"},
	{"city":"Saunda", "state":"Jharkhand"},
	{"city":"Simdega", "state":"Jharkhand"},
	{"city":"Tenu Dam-cum- Kathhara", "state":"Jharkhand"}
]

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      whatsappNumber: '',
      gender: 'M',
      bloodGroup: 'A+',
      city: 'Ranchi',
      subdomain: 'jharkhand',
      age: 25,
      whatsappCheck: false,
      consentToShare: true,
      loading: false,
      cities: cities,
      type: '0',
      reportUrl: '',
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

      form.type = parseInt(form.type)

      console.debug(form)
      store.dispatch('submitBeneficiaryForm', form)
        .then(() => {
          this.success('Donor Request submitted successfully!')
          this.loading = false
          this.done = true
        }).catch(error => {
          this.danger(error.response.data)
          this.loading = false
        })

      this.loading = false
    },
    simple(msg) {
      this.$buefy.notification.open({
        message: msg,
        position: 'is-bottom-right',
      })
    },
    success(msg) {
      this.$buefy.notification.open({
        message: msg,
        type: 'is-success',
        position: 'is-bottom-right',
      })
    },
    danger(msg) {
      this.$buefy.notification.open({
          message: msg,
          position: 'is-bottom-right',
          type: 'is-danger',
      })
    }
  }
}
</script>

<style scoped>

</style>
