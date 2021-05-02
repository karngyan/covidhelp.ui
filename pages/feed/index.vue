<template>
<div class="bg-gray-50">
  <div class="mx-auto py-28 grid grid-cols-1 gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
    <section aria-labelledby="right section" class="lg:col-start-1 lg:col-span-1">
      <b-field label="City">
        <b-select placeholder="Select one" expanded v-model="city">
          <option v-for="city in cities" :value="city.city" :key="city.city">{{ city.city }}</option>
        </b-select>
      </b-field>
      <div @click="city = ''" class="cursor-pointer font-sm pb-4 text-purple-600 hover:text-purple-800">clear city</div>

      <b-field label="Filter" class="overflow-auto">
        <div class="flex flex-col">
          <span v-for="tag in tags" :key="tag.identifier">
            <b-switch v-model="tag.status" >{{ tag.text }}</b-switch>
          </span>
        </div>
      </b-field>
    </section>
    <div class="space-y-6 lg:col-start-2 lg:col-span-3">
      <section aria-labelledby="posts">
        <ul class="posts space-y-4">
          <Post v-for="post in posts" :key="post.id" :post="post" />
        </ul>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import tags from '@/assets/tags'
import cities from '@/assets/cities'

export default {
  layout: 'default',
  computed: {
    tagString() {
      let res = ''
      this.tags.forEach((tag) => {
        if (tag.status)
          res += tag.identifier + "_"
      })
      this.tag = res
      return res
    }
  },
  data() {
    return {
      tags: tags,
      posts: [],
      postData: {
        page: 1,
        posts: [],
        minPage: 1,
        maxPage: 1
      },
      tag: '',
      page: 1,
      city: '',
      cities: cities,
    }
  },
  methods: {
    fetchPosts() {
      const store = this.$store
      this.tag = this.tagString
      console.debug('fetching posts')
      store.dispatch('fetchPosts', {tag: this.tag, page: this.page, city: this.city})
        .then((data) => {
          this.postData = data
          this.posts.push(...data.posts)

          console.debug(this.posts)
          store.dispatch('success', 'Posts fetch success.')
        }).catch((error) => {
          store.dispatch('danger', 'Some error occurred while fetching posts.')
      })
    }
  },
  created() {
    this.fetchPosts()
  },
  watch: {
    tags: {
      handler: function() {
        this.posts = []
        this.fetchPosts()
      },
      deep: true
    },
    city() {
      this.posts = []
      this.fetchPosts()
    }
  }
}
</script>

<style scoped>

</style>
