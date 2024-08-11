import { createApp } from 'vue'
import App from './App05.vue'
import Todo from './components/Todo05.vue'

const app = createApp(App)

app.component('todo-item', Todo)

app.mount('#app')