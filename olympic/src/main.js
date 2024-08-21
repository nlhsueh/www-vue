import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import carousel from './components/carousel.vue'
import c_medal from './components/c_medal.vue'
import medals from './components/medals.vue'
import sort from './components/sort.vue'
import updateMedals from './components/updateMedals.vue'
import paris_footer from './components/footer.vue'
import home from './components/home.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: home },
        { path: '/medals', component: medals },
        { path: '/updateMedals', component: updateMedals },
        { path: '/', redirect: '/home' },
    ]
});

const app = createApp(App)

app.use(router);
app.component('carousel', carousel);
app.component('sort', sort);
app.component('c_medal', c_medal);
app.component('paris_footer', paris_footer);

app.mount('#app')
