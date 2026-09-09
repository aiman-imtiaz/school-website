// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  compatibilityDate: '2026-06-30',

  app: {
    baseURL: '/'
  },

  nitro: {
    prerender: {
      routes: ['/', '/blog', '/contact', '/projects', '/speaking'],
      crawlLinks: false,
      ignore: ['/__nuxt_content/**']
    }
  },

  hooks: {
    'nitro:config' (nitro) {
      nitro.routeRules ||= {}
      nitro.routeRules['/__nuxt_content/**'] = {
        ...nitro.routeRules['/__nuxt_content/**'],
        prerender: false,
        payload: false
      }

      const contentDumpRoutes = [
        '/__nuxt_content/index/sql_dump.txt',
        '/__nuxt_content/projects/sql_dump.txt',
        '/__nuxt_content/blog/sql_dump.txt',
        '/__nuxt_content/pages/sql_dump.txt',
        '/__nuxt_content/speaking/sql_dump.txt',
        '/__nuxt_content/about/sql_dump.txt'
      ]

      for (const route of contentDumpRoutes) {
        nitro.routeRules[route] = {
          ...nitro.routeRules[route],
          prerender: false
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
