<template>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div v-show="!done" class="max-w-3xl mx-auto space-y-4">

    <div class="relative pb-6 pt-28">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('feedback.feedbackForm') }}
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        {{ $t('feedback.tag') }}
      </p>
    </div>

    <b-field :label="$t('name')">
      <b-input class="rounded-md border-gray-200" placeholder="Enter your full name" v-model="name"></b-input>
    </b-field>

    <b-field :label="$t('email')">
      <b-input placeholder="Enter your email address" v-model="email" type="email"></b-input>
    </b-field>

    <b-field :label="$t('message')">
        <b-input maxlength="500" type="textarea" v-model="message"></b-input>
    </b-field>

    <b-button @click="submitForm" :disabled="message.length < 5 || name.length <= 0" type="is-primary" expanded :loading="loading">{{ $t('submit') }}</b-button>
  </div>
  <div v-show="done" class="max-w-3xl mx-auto space-y-4">
    <div class="h-screen space-y-2 -py-10 flex flex-col items-center justify-center relative">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('feedback.thankYou') }}
      </h2>
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
      message: '',
      loading: false,
      done: false,
    }
  },
  watch: {
  },
  methods: {
    submitForm() {
      const store = this.$store
      this.loading = true
      const form = {...this.$data}

      console.debug(form)
      store.dispatch('submitFeedbackForm', form)
        .then(() => {
          this.success('Feedback Submitted Successfully!')
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
