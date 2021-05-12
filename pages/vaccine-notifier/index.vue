<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  <div class="max-w-3xl mx-auto space-y-4">

    <div class="relative pt-16">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('vaccineNotifier.header') }}
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        {{ $t('vaccineNotifier.subtext') }}
      </p>
    </div>


    <b-tabs v-model="form.findBy" position="is-centered" class="block">
      <b-tab-item
        value="0"
        :label="$t('pinCode')">
        <b-field :label="$t('email')">
          <b-input placeholder="mail@gmail.com" v-model="form.email" type="email"></b-input>
        </b-field>

        <b-field :label="$t('whatsappNumber')">
          <b-input placeholder="+91 12340 04321" v-model="form.whatsappNumber" type="text"></b-input>
        </b-field>

        <b-field :label="$t('pinCode')">
          <b-input placeholder="Enter your pin code" v-model="form.pinCode" type="text"></b-input>
        </b-field>

        <b-field :label="$t('ageGroup')">

          <b-select placeholder="Select one" expanded v-model="form.ageGroup">
            <option value="0">18+</option>
            <option value="1">45+</option>
          </b-select>

        </b-field>



      </b-tab-item>



      <b-tab-item value="1" :label="$t('district')">
        <b-field :label="$t('email')">
          <b-input placeholder="mail@gmail.com" v-model="form.email" type="email"></b-input>
        </b-field>

        <b-field :label="$t('whatsappNumber')">
          <b-input placeholder="+91 12340 04321" v-model="form.whatsappNumber" type="text"></b-input>
        </b-field>

        <b-field :label="$t('state')">
          <b-select placeholder="Select one" expanded v-model="state">
            <option v-for="state in states" :value="state" :key="state.state_id">{{ state.state_name }}</option>
          </b-select>
        </b-field>

        <b-field v-if="state" :label="$t('district')">
          <b-select placeholder="Select one" expanded v-model="district">
            <option v-for="district in districts" :value="district" :key="district.district_id">{{ district.district_name }}</option>
          </b-select>
        </b-field>

        <b-field :label="$t('ageGroup')">

          <b-select placeholder="Select one" expanded v-model="form.ageGroup">
            <option value="0">18+</option>
            <option value="1">45+</option>
          </b-select>

        </b-field>
      </b-tab-item>
    </b-tabs>

    <div class="mx-4">
      <b-button @click="submitForm" :disabled="(form.findBy === '0' && form.pinCode.length !== 6) || (form.findBy === '1' && state === null && district === null)" type="is-primary" expanded :loading="form.loading">{{ $t('vaccineNotifier.notifyMe') }}</b-button>
    </div>



  </div>
</div>
</template>

<script>
import cowinStates from '~/assets/cowinmeta'

export default {
  computed: {
    districts() {
      if (this.state) {
        let districts = []
        this.states.forEach((state) => {
          if (state.state_id === this.state.state_id) {
            districts = state.districts
          }
        })
        return districts
      }
      return []
    }
  },
  data() {
    return {
      form: {
        email: '',
        whatsappNumber: '',
        pinCode: '',
        stateId: 0,
        stateName: '',
        districtId: 0,
        districtName: '',
        findBy: '0', // 0 is pincode and 1 is district
        ageGroup: '0', // 0 is 18+ and 1 is 45+
        loading: false,
      },
      states: cowinStates,
      state: null,
      district: null,
    }
  },
  methods: {
    submitForm() {
      console.debug(this.$data)
      const form = this.$data.form
      form.findBy = parseInt(form.findBy)
      form.ageGroup = parseInt(form.ageGroup)
      if (form.findBy === 1) {
        form.stateId = this.state.state_id
        form.stateName = this.state.state_name
        form.districtId = this.district.district_id
        form.districtName = this.district.district_name
      }

      this.createRequest(form)
    },
    createRequest(form) {
      this.loading = true
      const store = this.$store
      store.dispatch('createVNRequest', form)
      .then(() => {
        this.$store.dispatch('success', 'Vaccine Notification Request submitted successfully')
        this.clearForm()
      }).catch((error) => {
        this.$store.dispatch('danger',error.response.data)
        this.loading = false
      })
    },
    clearForm() {
      this.form.email = ''
      this.form.whatsappNumber = ''
      this.form.pinCode = ''
      this.form.stateId = 0
      this.form.districtId = 0
      this.form.stateName = ''
      this.form.districtName = ''
      this.form.loading = false
      this.state = null
      this.district = null
    }
  },
  created() {
    console.debug(this.$data)
  }
}
</script>

<style scoped>

</style>
