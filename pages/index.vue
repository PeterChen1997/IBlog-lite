<template>
  <div>
    <Banner 
      title="Adventure Park - Lite"
      subtitle="Stay hungry. Stay foolish"
      />
    <articles-list :articlesList="articlesList"/>

    <div class="next">
      <nuxt-link to="/1">Next ></nuxt-link>
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
  asyncData({ app, params }) {
      return app.$axios.get(`https://api.peterchen.club/api/articles/page/1`).then(res => {
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

