import { createApp } from 'vue'
import AppFood from './AppFood04c.vue'
import FoodItem from './components/FoodItem04c.vue'

const app = createApp(AppFood)

app.component('food-item', FoodItem)

app.mount('#app')