module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Peter's blog(Lite)",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3eaf7c' },
  modules: [
    [
      'nuxt-bulma-slim',
      {
        variablesPath: 'assets/scss/my-variables.scss',
        additionalPaths: ['assets/scss/component-styles.scss']
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    baseURL: ''
  },
  workbox: {
    importScripts: [
        'custom-sw.js'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

