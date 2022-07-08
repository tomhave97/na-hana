import { defineNuxtConfig } from 'nuxt'

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
        '@nuxt3/graphql-codegen-module',
        '@nuxt3/apollo-module'
    ],
    graphqlCodegen: {},
    types: [
        "@pinia/nuxt"
    ],
    apollo: {
        clientConfigs: {
            default: {
                uri: 'http://localhost:4000'
            },
        },
        // Cookie parameters used to store authentication token
        cookieAttributes: {
            /**
             * Define when the cookie will be removed. Value can be a Number
             * which will be interpreted as days from time of creation or a
             * Date instance. If omitted, the cookie becomes a session cookie.
             */
            expires: 7,

            /**
             * Define the path where the cookie is available. Defaults to '/'
             */
            path: '/',

            /**
             * Define the domain where the cookie is available. Defaults to
             * the domain of the page where the cookie was created.
             */
            domain: 'localhost:4000',

            /**
             * A Boolean indicating if the cookie transmission requires a
             * secure protocol (https). Defaults to false.
             */
            secure: false,
        },
    }
})
