export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: 'http://localhost',
            appName: 'ellukasion NuxtCMS',
        },
    },
    build: {
        transpile: [],
    },
    css: [
        '~/assets/sass/app.scss'
    ],
    modules: [
        '@vueuse/motion/nuxt',
        '@pinia/nuxt',
        '@element-plus/nuxt'
    ],
    pinia: {
        autoImports: [
            'defineStore',
            'storeToRefs'
        ],
    },
    routeRules: {
        '/auth/**': { ssr: false },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        dirs: ['store'],
    },
    elementPlus: { /** Options */ }
})
