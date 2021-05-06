<template>
  <div>
    <b-modal
        v-model="donorModalOpen"
        has-modal-card
        :can-cancel="true">
        <DonorCriteriaModal />
    </b-modal>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-show="!done" class="max-w-3xl mx-auto space-y-4">

        <div class="relative flex flex-col space-y-3 items-center justify-center pb-6 pt-28">
          <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ $t('donor.header') }}
          </h2>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            {{ $t('donor.subtext') }}
          </p>
          <b-button @click="donorModalOpen = true" type="is-primary">{{ $t('openCriteria') }}</b-button>
        </div>
        <b-field
          :label="$t('preference')">
          <b-select placeholder="Select one" expanded v-model="preference">
            <option value="0">{{ $t('plasma') }}</option>
            <option value="1">{{ $t('blood') }}</option>
            <option value="2">{{ $t('both') }}</option>
          </b-select>
        </b-field>

        <b-field :label="$t('name')">
          <b-input class="rounded-md border-gray-200" placeholder="Enter your full name" v-model="name"></b-input>
        </b-field>

        <b-field :label="$t('email')">
          <b-input placeholder="Enter your email address" v-model="email" type="email"></b-input>
        </b-field>

        <b-field :label="$t('phoneNumber')">
          <b-input placeholder="Enter your active phone number" v-model="phone" type="tel"></b-input>
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

        <b-field :label="$t('heightInCms')">
          <b-numberinput v-model="heightInCm"></b-numberinput>
        </b-field>

        <b-field :label="$t('weightInKgs')">
          <b-numberinput v-model="weightInKgs"></b-numberinput>
        </b-field>

        <b-field :label="$t('ageInYears')">
          <b-numberinput v-model="age"></b-numberinput>
        </b-field>

        <b-field :label="$t('donor.whenPositive')">
            <b-datepicker v-model="covidInfectedStart"
                :first-day-of-week="1"
                placeholder="Click to select a date">

                <b-button
                    :label="$t('today')"
                    type="is-primary"
                    icon-left="calendar-today"
                    @click="covidInfectedStart = new Date()" />
            </b-datepicker>
        </b-field>

        <b-field>
          <b-checkbox v-model="vaccinated">
            {{ $t('donor.beenVaccinatedQuestion') }}
          </b-checkbox>
        </b-field>

        <b-field v-show="vaccinated" :label="$t('donor.shareVaccinationDate')">
            <b-datepicker v-model="vaccinationDate"
                :first-day-of-week="1"
                placeholder="Click to select vaccination date">

                <b-button
                    :label="$t('today')"
                    type="is-primary"
                    icon-left="calendar-today"
                    @click="vaccinationDate = new Date()" />
            </b-datepicker>
        </b-field>



        <b-field :label="$t('donor.symptomFreeDays')">
          <b-numberinput v-model="symptomFreeDays"></b-numberinput>
        </b-field>

        <div class="submit py-4">
          <b-field>
            <b-checkbox v-model="consentToShare">
              {{ $t('donor.consent') }}
            </b-checkbox>
          </b-field>

          <b-button @click="submitForm" :disabled="!consentToShare" type="is-primary" expanded :loading="loading">
            {{ $t('submit') }}
          </b-button>
        </div>
      </div>
      <div v-show="done" class="max-w-3xl mx-auto space-y-4">
        <div class="h-screen -py-10 space-y-2 flex flex-col items-center justify-center relative">
          <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Donor Registered Successfully!
          </h2>
          <p class="max-w-3xl mx-auto text-center text-xl text-gray-500">
            Thank you so much for contributing. Please turn your email notifications on. :)
          </p>
        </div>
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
      heightInCm: 150,
      weightInKgs: 70,
      city: 'Ranchi*',
      state: 'Jharkhand',
      states: Object.keys(stateCity),
      age: 25,
      covidInfected: true,
      covidInfectedStart: null,
      covidInfectedEnd: null,
      symptomFreeDays: 1,
      vaccinated: false,
      vaccinationDate: null,
      whatsappCheck: true,
      consentToShare: true,
      loading: false,
      preference: '0',
      done: false,
      donorModalOpen: false
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
