<template>
    <div class="list-item">
        <nuxt-link class="title" :to="'/articles/' + article.id">{{ article.title }}</nuxt-link>
        <p class="desc">{{ article.desc.length > 55 ? article.desc.slice(0, 55) + "..." : article.desc }}</p>
        <br>
        <p style="margin-bottom: 0.6rem;"><i class="fa fa-tag"></i> 标签：{{article.topic.split("-").join(" / ")}}</p>
        <p style="float: right;"><i class="fa fa-calendar-times-o"></i> 日期：{{article.createdAt.slice(0, 10)}}</p>
        <p><i class="fa fa-book"></i> 浏览数：{{article.view}}</p>
    </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>

<style scoped>
.list-item {
  margin-bottom: 1rem;
  border-bottom: 1px dashed #e9e9e9;
  padding-top: 16px;
  padding-bottom: 16px;
}
.list-item .title {
    color: #4f4f4f;
    font-size: 1.4rem;
    margin-bottom: 1rem;
}
.list-item .desc {
    padding-top: 1rem;
}
.list-item p {
    color: #999;
}
</style>


