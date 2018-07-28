<template>
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
        <h3 class="container-h3">文章列表</h3>
            <div class="list">
                <ArticleBlock v-for="item in articlesList"
                    :key="item.id"
                    :article="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ArticleBlock from '@/components/ArticleBlock'

export default {
    props: [
        'articlesList'
    ],
    components: {
        ArticleBlock
    }
}
</script>


<style scoped>
.columns {
    margin-top: 3rem;
    width: 100%;
    padding: 2rem;
}
.container-h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
}
</style>
