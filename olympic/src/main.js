
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store';

import App from './App.vue'
import medals from './views/medals.vue'
import updateMedals from './views/updateMedals.vue'
import home from './views/home.vue'
import carousel from './components/carousel.vue'
import c_medal from './components/c_medal.vue'
import sort from './components/sort.vue'
import paris_footer from './components/footer.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: home },
        { path: '/medals', component: medals },
        { path: '/updateMedals', component: updateMedals },
    ]
});


const app = createApp(App)

app.use(router);
app.use(store);
app.component('carousel', carousel);
app.component('sort', sort);
app.component('c_medal', c_medal);
app.component('paris_footer', paris_footer);


app.mount('#app')