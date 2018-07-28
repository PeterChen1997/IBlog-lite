<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
            <h2 class="nav-title">博客-Lite</h2>
        </nuxt-link>
        
        <a role="button" :class='{"navbar-burger": true, "is-active": menuOpenStatus}'
            aria-label="menu" 
            aria-expanded="false"
            @click="handleClick">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        </div>

        <div :class='{"navbar-menu": true, "is-active": menuOpenStatus}'
            @click="handleClick">
            <div class="navbar-end">
                <nuxt-link class="navbar-item" to="/about">
                    关于
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuOpenStatus: false
        }
    },
    methods: {
        handleClick() {
            this.menuOpenStatus = !this.menuOpenStatus
        }
    }
};
</script>


<style scoped>
.nav-title {
    font-size: 1.2em;
    font-weight: 500;
}
.navbar-brand {
    padding: 0 1rem;
}
.navbar-burger span {
    color: #3eaf7c;
}
</style>
