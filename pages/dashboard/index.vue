<template>
  <div>
    <div class="bg-white my-10 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        User Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Personal details and metadata.
      </p>
    </div>
    <div v-if="user" class="border-t border-gray-200 px-4 py-3 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Full name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ user.volunteer.name }}
          </dd>
        </div>
        <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Email
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ user.volunteer.email }}
          </dd>
        </div>
        <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Blocked
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ user.blocked }}
          </dd>
        </div>
        <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Verified
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ user.verified }}
          </dd>
        </div>
        <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Type
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ user.type === 0 ? 'Volunteer' : 'Not Volunteer' }}
          </dd>
        </div>
      </dl>
    </div>
    </div>
    <VerifyEmail />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    user() {
      const user = this.$store.state.user
      return user
    }
  },
  data() {
    return {

    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
