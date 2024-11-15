import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // Compila il mio file scss in css (che verrà messo dentro public)
                'resources/scss/app.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
        vue()
    ],
    resolve: {
        alias: {
            // Creiamo un nome alternativo al percorso /resources/
            '~resources': '/resources/',
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
});
