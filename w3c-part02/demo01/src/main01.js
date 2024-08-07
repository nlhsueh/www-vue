import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import App from './Food01.vue'
import FoodItem01 from './components/FoodItem01.vue'

const app = createApp(App)

app.component('food-item', FoodItem01)

app.mount('#app')