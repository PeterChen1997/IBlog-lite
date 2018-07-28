<template>
  <div>
    <articles-list :articlesList="articlesList"/>

    <div class="next">
      <nuxt-link :to="'/' + prePageId">&lt; Pre&nbsp;&nbsp;</nuxt-link>
      <nuxt-link :to="'/' + nextPageId">&nbsp;&nbsp;Next ></nuxt-link>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import ArticlesList from '@/components/ArticlesList'

export default {
  components: {
    Banner,
    ArticlesList
  },
  computed: {
    prePageId() {
      if (this.$route.params.id === '1') {
        return ''
      } else {
        return Number(this.$route.params.id) - 1
      }
    },
    nextPageId() {
      return Number(this.$route.params.id) + 1
    }
  },
  asyncData({ app, params }) {
      return app.$axios.get(`https://api.peterchen.club/api/articles/page/${Number(params.id) + 1}`).then(res => {
        return {
          articlesList: res.data.rows
        }
      })
  }
}
</script>

<style scoped>
.next {
  width: 100%;
  text-align: center;
  padding-bottom: 3rem;
  font-size: 1.4rem;
}
.next a {
  color: #999;
}
</style>

