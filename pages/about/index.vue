<template>
  <div class="about">
    <Banner 
      title="关于我"
      subtitle="一名即将成为应届生的大学生"
    />
    <div class="container">
      这是<a target="_blank" rel="noopener noreferrer" href="https://www.peterchen.club/resume/">我的简历</a>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  components: {
    Banner
  }
}
</script>

<style scoped>
.container {
  height: 100px;
  width: 100%;
  text-align: center;
  line-height: 100px;
  font-size: 1.3rem;
}
</style>

