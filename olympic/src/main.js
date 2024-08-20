import { createApp } from 'vue'
import App from './App.vue'
import carousel from './components/carousel.vue'
import c_medal from './components/c_medal.vue'
import sort from './components/sort.vue'
import updateMedals from './components/updateMedals.vue'
import paris_footer from './components/footer.vue'
import country_details from './components/country_details.vue'



const app = createApp(App)

app.component('carousel', carousel);
app.component('c_medal', c_medal);
app.component('sort', sort);
app.component('updateMedals', updateMedals);
app.component('paris_footer', paris_footer);
app.component('country_details', country_details);


app.mount('#app')