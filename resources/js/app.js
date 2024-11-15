import './bootstrap';

// Ci portiamo appresso il file scss
import '~resources/scss/app.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Ci portiamo appresso tutte le immagini che si trovano nella cartella resources/img
import.meta.glob([
    '../img/**'
]);

// importo Vue
import { createApp } from 'vue'; 
import App from './App.vue';

// importo Vue Router
import { createRouter, createMemoryHistory } from 'vue-router';

// importo il file con le rotte
import routes from './router/router.js';

const router = createRouter({
    history: createMemoryHistory(), 
    routes
    });

const app = createApp(App)

app.use(router);
app.mount('#app')