export default {

  // nuxt handles invoking this
  authAction({dispatch, state, commit}, {authUser, claims}) {
    console.debug('in auth action')
    if (state.signUpState) {
      return
    }

    if (!authUser) {
      dispatch('signOut')
    } else {
      // logged in
      const fuid = authUser.uid
      console.debug('auth action fuid', fuid)
      authUser.getIdToken(true).then((token) => {
        dispatch('fetchUser', {fuid, token})
          .then((data) => {
            console.debug('current user', data)
          }).catch((error) => {
            dispatch('danger', error.toString())
            dispatch('signOut')
            this.$router.push('/login')
        })
      })
    }
  },

  fetchUser({state, commit}, {fuid, token}) {
    return new Promise((resolve, reject) => {
      if (state.user) {
        const user = state.user
        resolve(user)
        return
      }

      this.$axios.get('/users/' + fuid, {
        headers: { 'X-Token': token }
      })
        .then(res => {
          commit('setUser', res.data)
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  signOut({commit}) {
    return this.$fire.auth.signOut()
      .then(() => {
        commit('setUser', null)
        this.$router.push("/")
      })
  },

  signInUserWithEmailAndPassword({dispatch}, {email, password}) {
    return new Promise((resolve, reject) => {
      this.$fire.auth.signInWithEmailAndPassword(email, password)
        .then((userCred) => {
          const fuid = userCred.user.uid
          userCred.user.getIdToken(true)
            .then(token => {
              dispatch('fetchUser', {fuid, token})
                .then((user) => {
                  resolve(user)
                }).catch(error => {
                  reject(error)
              })
            })

        }).catch((error) => {
          reject(error)
        })
    })
  },

  signUpWithEmailAndPassword({dispatch, commit}, {email, password}) {
    return new Promise((resolve, reject) => {
      this.$fire.auth.createUserWithEmailAndPassword(email, password)
        .then(data => {
          resolve(data)
        }).catch((error) => {
          reject(error)
      })
    })
  },

  setSignUpState({commit}, val) {
    return new Promise((resolve, reject) => {
      commit('setSignUpState', val)
      resolve();
    })
  },



  simple({commit}, msg) {
    commit('setSimple', msg)
  },
  success({commit},msg) {
    commit('setSuccess', msg)
  },
  danger({commit}, msg) {
    commit('setDanger', msg)
  },
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
      }, {
        headers: {
          'X-Token': form.token
        }
      }).then((resp) => {
        commit('setUser', resp.data)
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
