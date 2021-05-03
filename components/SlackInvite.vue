<template>
  <div>
    <a :href="inviteLink" target="_blank" class="flex text-purple-700 hover:text-hover-800 flex-row items-center space-x-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-900" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
      </svg>
      <span class="text-center">
        Join Slack to interact with the Team
      </span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inviteLink: 'https://join.slack.com/t/covid-help-india/shared_invite/zt-psrs4sdu-joQRAhwmwLx1b56UTl84zw'
    }
  }
}
</script>

<style scoped>

</style>
