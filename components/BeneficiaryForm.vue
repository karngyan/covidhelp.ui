<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div v-show="!done" class="max-w-3xl mx-auto space-y-4">

    <div class="relative pb-6 pt-16">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('beneficiary.header')}}
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        {{ $t('beneficiary.subtext') }}
      </p>
    </div>

    <b-field
      :label="$t('beneficiary.requestType')">
      <b-select placeholder="Select one" expanded v-model="type">
        <option value="0">Plasma</option>
        <option value="1">Blood</option>
      </b-select>
    </b-field>

    <b-field :label="$t('name')">
      <b-input class="rounded-md border-gray-200" placeholder="Enter your full name" v-model="name"></b-input>
    </b-field>

    <b-field :label="$t('email')">
      <b-input placeholder="Enter your email address" v-model="email" type="email"></b-input>
    </b-field>

    <b-field :label="$t('phoneNumber')">
      <b-input placeholder="Enter your active phone number" v-model="phone" type="text"></b-input>
    </b-field>

    <b-field :label="$t('whatsappNumber')">
      <b-input placeholder="Enter your active phone number" v-model="whatsappNumber" type="text"></b-input>
    </b-field>

    <b-field>
      <b-checkbox v-model="whatsappCheck">
        {{ $t('sameAsPhoneNumber') }}
      </b-checkbox>
    </b-field>

    <b-field
      :label="$t('gender')">
      <b-select placeholder="Select one" expanded v-model="gender">
        <option value="F">{{ $t('female') }}</option>
        <option value="M">{{ $t('male') }}</option>
        <option value="O">{{ $t('other') }}</option>
      </b-select>
    </b-field>

    <b-field :label="$t('state')">
      <b-select placeholder="Select one" expanded v-model="state">
        <option v-for="state in states" :value="state" :key="state">{{ state }}</option>
      </b-select>
    </b-field>

    <b-field :label="$t('city')">
      <b-select placeholder="Select one" expanded v-model="city">
        <option v-for="city in cities" :value="city" :key="city">{{ city }}</option>
      </b-select>
    </b-field>

    <b-field :label="$t('bloodGroup')">
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
    <b-field>
      <b-checkbox v-model="oxygenAvailable">
        {{ $t('beneficiary.accessToOxygenCylinder') }}
      </b-checkbox>
    </b-field>

    <b-field :label="$t('beneficiary.spo2Value')">
      <b-numberinput v-model="oxygenLevel" maxvalue="100" minvalue="0"></b-numberinput>
    </b-field>

    <b-field :label="$t('beneficiary.reportLink')">
      <b-input placeholder="upload the COVID report on Google drive and share the public link" v-model="reportUrl" type="text"></b-input>
    </b-field>

    <div class="submit py-4">
      <b-field>
        <b-checkbox v-model="consentToShare">
          {{ $t('beneficiary.consent') }}
        </b-checkbox>
      </b-field>

      <b-button @click="submitForm" type="is-primary" :disabled="!consentToShare" expanded :loading="loading">{{ $t('submit') }}</b-button>
    </div>
  </div>
  <div v-show="done" class="max-w-3xl mx-auto space-y-4">
    <div class="h-screen space-y-2 -py-10 flex flex-col items-center justify-center relative">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('beneficiary.success') }}
      </h2>
      <p class="max-w-3xl mx-auto text-center text-xl text-gray-500">
        {{ $t('beneficiary.thankYou') }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import stateCity from "@/assets/state-city"

export default {
  computed: {
    cities() {
      return stateCity[this.state]
    }
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      whatsappNumber: '',
      gender: 'M',
      bloodGroup: 'A+',
      city: 'Ranchi*',
      state: 'Jharkhand',
      states: Object.keys(stateCity),
      age: 25,
      whatsappCheck: true,
      consentToShare: true,
      loading: false,
      type: '0',
      reportUrl: '',
      done: false,
      oxygenAvailable: false,
      oxygenLevel: 90
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
      form.oxygenLevel = parseInt(form.oxygenLevel)

      console.debug(form)
      store.dispatch('submitBeneficiaryForm', form)
        .then(() => {
          this.$store.dispatch('success', 'Donor Request submitted successfully!')
          this.loading = false
          this.done = true
        }).catch(error => {
          this.$store.dispatch('danger',error.response.data)
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>

</style>
