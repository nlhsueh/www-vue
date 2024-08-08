import { createApp } from 'vue'
import AppFood from './AppFood04a.vue'
import FoodItem from './components/FoodItem04a.vue'

const app = createApp(AppFood)

app.component('food-item', FoodItem)

app.mount('#app')