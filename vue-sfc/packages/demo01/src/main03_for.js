import { createApp } from 'vue'
import AppFood from './AppFood03c.vue'
import FoodItem from './components/FoodItem03c.vue'

const app = createApp(AppFood)

app.component('food-item', FoodItem)

app.mount('#app')