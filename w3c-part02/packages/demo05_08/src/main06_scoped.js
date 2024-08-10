import { createApp } from 'vue'

import App from './App06.vue'
import CompOne from './components/CompOne06.vue'
import CompTwo from './components/CompTwo06.vue'

const app = createApp(App)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.mount('#app')