<template>
  <li class="bg-white px-4 shadow py-4 rounded-md sm:rounded-lg">
    <article aria-labelledby="question-title-81614">
      <div>
        <div class="flex space-x-3 justify-between items-center">
          <div class="flex-shrink-0 flex-row flex space-x-2">
            <div class="flex-shrink-0">
              <UserCircle class="h-6 w-6" :name="post.user.volunteer.name"/>
            </div>
            <div class="min-w-0 flex-1 items-center">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">{{ post.user.volunteer.name }}</a>
              </p>
              <p class="text-sm text-gray-500">
                <a href="#" class="hover:underline">
                  <time :datetime="new Date(post.created)">{{ posted }}</time>
                </a>
              </p>
            </div>
          </div>
          <div class="flex text-sm">
            <span v-show="actions" class="inline-flex items-center space-x-6 text-sm">
              <svg @click="updatePost" xmlns="http://www.w3.org/2000/svg" class="h-5 cursor-pointer w-5 text-gray-400 hover:text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
              </svg>
              <svg @click="deletePost" xmlns="http://www.w3.org/2000/svg" class="h-5 cursor-pointer w-5 text-gray-400 hover:text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        <h2 id="question-title-81614" class="mt-4 text-base font-medium text-gray-900">
          {{ post.title }}
        </h2>
      </div>
      <div class="mt-2 show-white-space text-sm text-gray-700 space-y-4">{{ post.description.trim() }}</div>
      <div class="mt-2 flex justify-between space-x-2 overflow-auto">
        <div class="flex space-x-2">
          <span v-if="post.city" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
            {{ post.city }}
          </span>
          <span v-if="post.state" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
            {{ post.state }}
          </span>
          <span v-for="tag in tags" :key="tag" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </li>
</template>

<script>
import formatDistance from 'date-fns/formatDistance'
import allTags from '@/assets/tags'

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    actions: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    posted() {
      return formatDistance(new Date(Math.floor(this.post.updated/1e6)), new Date(), {addSuffix: true})
    },
    tags() {
      const customTags = []
      this.post.tag.split('_').forEach((tag) => {
        if (tag.length > 0) {
          const xtag = allTags.filter((xtag) => xtag.identifier === tag.trim())
          if (xtag.length > 0)
            customTags.push(xtag[0].text.trim())
        }
      })
      return customTags
    }
  },
  methods: {
    deletePost() {
      const pid = this.post.id
      console.debug('deleting', pid)
      const store = this.$store
      store.dispatch('deletePost', {pid: pid})
        .then(() => {
          store.dispatch('success', 'post deleted')
        }).catch(() => {
          store.dispatch('danger', 'post was not deleted')
      })
    },
    updatePost() {
      this.$router.push('/dashboard/posts/' + this.post.id)
    }
  },
  created() {
  }
}
</script>

<style scoped>
.show-white-space {
    white-space: pre-wrap;
}
</style>
