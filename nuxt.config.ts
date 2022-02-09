import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/css/tailwind.css"],
    typescript: {
        strict: true
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
        transpile: ['vee-validate'],
    },
    buildModules: [
        '@vueuse/core/nuxt',
        '@pinia/nuxt',
        "@nuxt3-graphql/urql",
        "@nuxt3-graphql/codegen"
    ],
    types: [
        // ...
        "@pinia/nuxt"
    ],
    urql: {
        url: `https://api-eu-central-1.graphcms.com/v2/${process.env.GRAPH_CMS_API_KEY_PROD}/master`,
    },
})
