<template>
<section class="hero is-bold is-medium">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="subtitle">
        {{ subtitle }}
      </h2>
    </div>
  </div>
</section>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>


<style scoped>
.hero {
    border-bottom: 1px solid #eaecef;
    border-top: 1px solid #eaecef;
}
.container {
  text-align: center;
}
</style>
