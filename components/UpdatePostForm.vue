<template>
<div>
  <div class="max-w-3xl mx-auto space-y-4">

    <div class="relative py-6">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Update post
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        Please verify the details before posting. If there's a phone number, give them a call and confirm the availability.
      </p>
    </div>


    <b-field label="Title of the post" message="Keep it short, simple and direct.">
      <b-input minlength="1" class="rounded-md border-gray-200" placeholder="" v-model="title"></b-input>
    </b-field>

    <b-field label="Description" message="Add all possible details. Links, Phone Numbers.">
      <b-input minlength="1" maxlength="1000" type="textarea" v-model="description"></b-input>
    </b-field>

    <b-field label="Related To" message="Mark all that relates." class="overflow-auto">
      <div class="flex flex-col">
      <span v-for="tag in tags" :key="tag.identifier">
        <b-switch v-model="tag.status" >{{ tag.text }}</b-switch>
      </span>
      </div>
    </b-field>

    <b-field label="State">
      <b-select placeholder="Select one" expanded v-model="state">
        <option v-for="state in states" :value="state" :key="state">{{ state }}</option>
      </b-select>
    </b-field>

    <b-field label="City">
      <b-select placeholder="Select one" expanded v-model="city">
        <option v-for="city in cities" :value="city" :key="city">{{ city }}</option>
      </b-select>
    </b-field>

    <div class="submit py-4">
      <b-field>
        <b-checkbox v-model="verifiedCheck">
          I have verified the details.
        </b-checkbox>
      </b-field>

      <b-button @click="updatePost" type="is-primary" :disabled="!verifiedCheck" expanded :loading="loading">Update Post</b-button>
    </div>
  </div>
</div>
</template>

<script>
import tags from '@/assets/tags'
import stateCity from "@/assets/state-city"

export default {
  name: "UpdatePostForm",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    tagString() {
      let res = ''
      this.tags.forEach((tag) => {
        if (tag.status)
          res += tag.identifier + "_"
      })
      this.tag = res
      return res
    },
    cities() {
      return stateCity[this.state]
    }
  },
  // watch: {
  //   tags: {
  //     deep: true,
  //     handler: () => {
  //       let res = ''
  //       this.tags.forEach((tag) => {
  //         if (tag.status)
  //           res += tag.identifier + "_"
  //       })
  //       this.tag = res
  //       this.tagString = res
  //     }
  //   }
  // },
  data() {
    return {
      title: '',
      description: '',
      imageUrl: '',
      tag: '',
      loading: false,
      verifiedCheck: false,
      tags: tags,
      city: 'Ranchi*',
      state: 'Jharkhand',
      states: Object.keys(stateCity),
    }
  },
  methods: {
    validateForm() {
      if (this.title.length === 0) {
        this.$store.dispatch('danger', 'Please add a title')
        return false
      }
      if (this.description.length === 0) {
        this.$store.dispatch('danger', 'Please add a description')
        return false
      }
      if (this.tagString.length === 0) {
        this.$store.dispatch('danger', 'Please select at least one tag')
        return false
      }
      this.tag = this.tagString
      return true
    },
    updatePost() {
      if (this.validateForm()) {
        this.loading = true
        const body = this.$data
        const store = this.$store
        store.dispatch('updatePost', body)
          .then(() => {
            store.dispatch('success', 'Post updated successfully')
            this.loading = false
          }).catch(error => {
            store.dispatch('danger', error.toString())
            this.loading = false
        })
      }
    }
  },
  created() {
    const store = this.$store
    store.dispatch('fetchPost', {pid: this.id})
      .then((data) => {
        this.tags.forEach((tag, index) => {
          this.tags[index].status = data.tag.includes(tag.identifier);
        })
        Object.assign(this.$data,  {...this.$data, ...data})
      }).catch((error) => {
        store.dispatch('danger', 'failed to fetch post ' + error.toString())
    })
  }
}
</script>

<style scoped>

</style>
