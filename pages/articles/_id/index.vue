<template>
<div class="container">
<div style="color: rgb(187, 187, 187); border-bottom: 1px solid rgb(229, 229, 229); margin-bottom: 2em;">
   <div class="title">
    {{ articleDetail.title }}
   </div>
   <div style="width: 100%; display: flex; justify-content: space-between;">
    <div class="topic">
     <p style="float: left;"><i class="fa fa-tag"></i> 标签：</p>
     <ul style="list-style: none; float: left; padding-left: 0px;">
      <li style="float: left; margin-top: 0px;">标签：{{articleDetail.topic.split("-").join(" / ")}}<span style="display: inline; margin: 0px 8px;">/</span></li>
     </ul>
    </div>
   </div>
   <div style="width: 100%; display: flex; justify-content: space-between;padding-bottom: 2rem;">
    <div class="time">
     <p><i class="fa fa-calendar-times-o"></i> {{articleDetail.createdAt.slice(0, 10)}}</p>
    </div>
    <div class="view">
     <p><i class="fa fa-book"></i> 浏览数：{{articleDetail.view}}</p>
    </div>
   </div>
  </div>

  <vue-mark-down class="markdown-body" :source="articleDetail.content"/>
</div>
</template>

<script>
import "primer-markdown/build/build.css"
import VueMarkDown from 'vue-markdown'

export default {
  head() {
    return {
      title: this.articleDetail.title
    }
  },
  components: {
    VueMarkDown
  },
  asyncData({ app, params }) {
    return app.$axios
      .get(`https://api.peterchen.club/api/articles/${params.id}`)
      .then(res => {
        return {
          articleDetail: res.data
        };
      });
  }
};
</script>

<style scoped>
.title {
  font-size: 1.4rem;
  display: block;
}
.container {
  padding: 2rem;
}
</style>

