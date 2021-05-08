<template>
  <li class="bg-white px-4 shadow py-4 rounded-md sm:rounded-lg">
    <article aria-labelledby="question-title-81614">
      <div>
        <div class="flex space-x-3 justify-between items-center">
          <div class="flex-shrink-0 flex-row flex space-x-2">
            <div class="min-w-0 flex-1 items-center">
              <p class="text-sm font-medium text-gray-900">
                <a :href="'https://twitter.com/' + post.authorUsername" target="_blank" class="hover:underline text-blue-600">@{{ post.authorUsername }}</a>
              </p>
              <p class="text-sm text-gray-500">
                <span href="#" class="">
                  <time :datetime="new Date(post.twitterCreatedAt)">{{ posted }}</time>
                </span>
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
      </div>
      <div class="mt-2 show-white-space text-sm text-gray-700 space-y-4">{{ post.text.trim() }}</div>
      <div class="mt-2 flex justify-between space-x-2 overflow-auto">
        <div class="flex space-x-2">
          <span v-if="post.city" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
            {{ post.city }}
          </span>
          <span v-if="post.state" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
            {{ post.state }}
          </span>
          <span v-for="tag in tags" :key="tag.identifier" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
            {{ $t('tags.' + tag.identifier) }}
          </span>


        </div>
        <a target="_blank" :href="`https://twitter.com/${post.authorUsername}/status/${post.twitterId}`" class="inline-flex items-center cursor-pointer px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-50 text-gray-800">
          Open on twitter
          <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 248 204" class="h-4 text-blue-500 pl-2 hover:text-blue-800" xml:space="preserve" fill="currentColor">
              <g id="Logo_1_">
                <path id="white_background" class="st0" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                  C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                  c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                  c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                  c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                  c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
              </g>
            </svg>
        </a>
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
      // return formatDistance(new Date(this.post.twitterCreatedAt), new Date(), {addSuffix: true})
    },
    tags() {
      const customTags = []
      this.post.tag.split('_').forEach((tag) => {
        if (tag.length > 0) {
          const xtag = allTags.filter((xtag) => xtag.identifier === tag.trim())
          if (xtag.length > 0) {
            customTags.push(xtag[0])
          }
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
      this.$router.push(this.localePath('/dashboard/posts/' + this.post.id))
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
