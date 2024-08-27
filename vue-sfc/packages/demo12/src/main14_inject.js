import { createApp } from 'vue'

import App from './App14.vue'
import FoodAbout from './components/FoodAbout.vue'
import FoodKinds from './components/FoodKind.vue'

const app = createApp(App)
app.component('food-about', FoodAbout)
app.component('food-kinds', FoodKinds)
app.mount('#app')