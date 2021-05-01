<template>
<div></div>
</template>

<script>
export default {
  methods: {
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
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setSimple') {
        this.simple(state.simple)
      }
      if (mutation.type === 'setDanger') {
        this.danger(state.danger)
      }
      if (mutation.type === 'setSuccess') {
        this.success(state.success)
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  }
}
</script>

<style scoped>

</style>
