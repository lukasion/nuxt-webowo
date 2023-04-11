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
    experimental: {
        reactivityTransform: true
    },
    plugins: [

    ],
    css: [
        '~/assets/sass/app.scss'
    ],
    modules: [
        '@vueuse/motion/nuxt',
        '@pinia/nuxt',
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
    server: {
        host: '0.0.0.0'
    },
    imports: {
        dirs: ['store'],
    },
})
