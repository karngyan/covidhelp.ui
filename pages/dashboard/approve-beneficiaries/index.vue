<template>
<div class="my-10">
  <VerifyEmail />
    <div class="py-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <div class="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
        <h3 class="text-lg text-center leading-6 font-medium text-gray-900">
          Check the report URL and approve them, in order to put them in the matching pool.
        </h3>
      </div>
    </div>


    <div class="flex flex-col">
      <div class="my-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Whatsapp
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report Url
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SPO2
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="" :class="index%2 === 0 ? 'bg-white' : 'bg-gray-50'" v-for="(beneficiary, index) in beneficiaryData.beneficiaries">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ beneficiary.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ beneficiary.email }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ beneficiary.phone }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ beneficiary.whatsappNumber }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a class="underline text-purple-600" :href="beneficiary.reportUrl" target="_blank">Open Report</a>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ beneficiary.oxygenLevel  + ' %'}}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <b-button size="is-small" @click="verify(beneficiary)" type="is-primary is-light" :loading="beneficiary.loading" :disabled="beneficiary.disabled">{{ beneficiary.text }}</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <h2 v-if="showNoData" class="text-center pb-6 font-bold text-lg">empty</h2>


    <nav class="py-5 flex items-center justify-between border-t border-gray-200" aria-label="Pagination">
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Showing page:
          <span class="font-medium">{{ beneficiaryData.page }}</span>
          of
          <span class="font-medium">{{ beneficiaryData.maxPage }}</span>
          pages.
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <button @click="onPreviousPageClick" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <button @click="onNextPageClick" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
    </nav>

</div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      beneficiaryData: {
        beneficiaries: [],
        page: 1,
        maxPage: 2,
        minPage: 1,
      },
      page: 1,
      showNoData: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    onNextPageClick() {
      if (this.beneficiaryData.maxPage > this.page) {
        this.page += 1
        this.fetchData()
      }
    },
    onPreviousPageClick() {
      if (this.beneficiaryData.minPage < this.page) {
        this.page -= 1
        this.fetchData()
      }
    },
    fetchData() {
      this.$store.dispatch('fetchUnverifiedBeneficiaries', {page: this.page})
        .then((data) => {
          data.beneficiaries.forEach((b, index) => {
            data.beneficiaries[index].loading = false
            data.beneficiaries[index].arrayIndex = index
            data.beneficiaries[index].text = 'Mark as Approved'
            data.beneficiaries[index].disabled = false
          })
          this.beneficiaryData = data
          console.debug(this.beneficiaryData)
          if (this.beneficiaryData.beneficiaries.length === 0)
            this.showNoData = true
          this.$store.dispatch('success', 'fetch success')
        }).catch((error) => {
          console.error(error)
          this.$store.dispatch('danger', 'fetch failed')
      })
    },
    verify(beneficiary) {
      const store = this.$store
      this.beneficiaryData.beneficiaries[beneficiary.arrayIndex].loading = true
      store.dispatch('verifyBeneficiary', {id: beneficiary.id})
        .then(() => {
          this.beneficiaryData.beneficiaries[beneficiary.arrayIndex].loading = false
          this.beneficiaryData.beneficiaries[beneficiary.arrayIndex].text = 'Done'
          this.beneficiaryData.beneficiaries[beneficiary.arrayIndex].disabled = true
          store.dispatch('success', 'approved: ' + beneficiary.email)
          console.debug(beneficiary, this.beneficiaryData)
        }).catch((error) => {
          store.dispatch('danger', 'failed: ' + beneficiary.email)
        this.beneficiaryData.beneficiaries[beneficiary.arrayIndex].loading = false
      })
    }
  },
  created() {
    if (this.user) {
      this.fetchData()
    }
  },
  watch: {
    user() {
      this.fetchData()
    }
  }

}
</script>
