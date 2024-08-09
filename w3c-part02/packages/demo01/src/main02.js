import { createApp } from 'vue'
import AppFood from './AppFood02c.vue'
import FoodItem from './components/FoodItem02c.vue'

const app = createApp(AppFood)

app.component('food-item', FoodItem)

app.mount('#app')