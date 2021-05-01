export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Covid Help Community in Jharkhand by BIT Mesra',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Covid Help Community in Jharkhand by BIT Mesra | Get Blood and Plasma Donors' },
      { name: 'title', content: 'Covid Help Community in Jharkhand by BIT Mesra | Get Blood and Plasma Donors'},
      { name: 'author', content: 'Gyan Prakash Karn & Vishesh Agrawal | mail@karngyan.com'},
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://jharkhand.covidhelp.page'},
      { property: 'og:title', content: 'Covid Help Community in Jharkhand by BIT Mesra'},
      { property: 'og:description', content: 'Get Blood and Plasma Donors'},
      { property: 'og:image', content: 'https://jharkhand.covidhelp.page/favicon.ico'},

      { property: 'twitter:card', content: 'https://jharkhand.covidhelp.page/favicon.ico'},
      { property: 'twitter:url', content: 'https://jharkhand.covidhelp.page'},
      { property: 'twitter:title', content: 'Covid Help Community in Jharkhand by BIT Mesra'},
      { property: 'twitter:description', content: 'Get Blood and Plasma Donors'},
      { property: 'twitter:image', content: 'https://jharkhand.covidhelp.page/favicon.ico'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase',
    ['nuxt-buefy', { css: true }]
  ],
  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedAction: 'authAction',
          subscribeManually: false
        },
        ssr: false,
      },
    },
  },
  env : {
    baseURL: process.env.BASE_URL || 'http://localhost:8081/api/v1'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:8081/api/v1', // for prod make sure you have a BASE_URL env variable
    credentials: false,
    headers: {
      common: {
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layout: true
    },
  },
  tailwindcss: {
    jit: true
  }
}
