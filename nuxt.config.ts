module.exports = {
  chainWebpack: config => config.resolve.set('symlinks', false),
  modules: [
   
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vuetify-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/i18n.js', '~/plugins/vee-validate.js', '~/plugins/moment-jalaali.js'],
  css: ['~/assets/style/main.css','~/assets/style/app.styl'],
  router:{
    middleware:'i18n'
  },
  generate: {
    routes: ['/', '/index', '/fa', '/fa/index']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

  }
}
