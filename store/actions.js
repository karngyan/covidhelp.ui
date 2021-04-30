export default {

  fetchSubdomains({state, commit}) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/subdomains')
        .then((resp) => {
          commit('setSubdomains', resp.data.subdomains)
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
  }
}
