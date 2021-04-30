export default {

  fetchSubdomainDetails({commit}, {subdomain}) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/subdomain/' + subdomain)
        .then((resp) => {
          resolve(resp.data)
        }).catch((error) => {
          reject(error)
      })
    })
  },

  submitDonorForm({state, commit}, form) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/donor/create', {
        ...form
      }).then((resp) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  submitBeneficiaryForm({state, commit}, form) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/beneficiary/create', {
        ...form
      }).then((resp) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  submitVolunteerForm({state, commit}, form) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/volunteer/create', {
        ...form
      }).then((resp) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  submitFeedbackForm({}, form) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/feedback/create', {
        ...form
      }).then((resp) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
