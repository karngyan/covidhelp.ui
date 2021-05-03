<template>
  <li class="bg-white px-4 shadow py-4 rounded-md sm:rounded-lg">
    <article aria-labelledby="question-title-81614">
      <div>
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <UserCircle :name="post.user.volunteer.name"/>
          </div>
          <div class="min-w-0 flex-1">
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
        <h2 id="question-title-81614" class="mt-4 text-base font-medium text-gray-900">
          {{ post.title }}
        </h2>
      </div>
      <div class="mt-2 show-white-space text-sm text-gray-700 space-y-4">{{ post.description.trim() }}</div>
      <div class="mt-2 flex justify-between space-x-2">
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
        <div class="flex text-sm">
          <span class="inline-flex items-center text-sm">
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
    }
  },
  computed: {
    posted() {
      return formatDistance(new Date(Math.floor(this.post.created/1e6)), new Date(), {addSuffix: true})
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
  created() {
  }
}
</script>

<style scoped>
.show-white-space {
    white-space: pre-wrap;
}
</style>
