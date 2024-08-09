import { createApp } from 'vue'
import AppFood from './AppFood01.vue'
// import FoodItem from './components/FoodItem01a.vue'
import FoodItem from './components/FoodItem01b.vue'

const app = createApp(AppFood)

app.component('food-item', FoodItem)

app.mount('#app')