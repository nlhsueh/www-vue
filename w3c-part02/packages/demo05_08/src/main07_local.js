import { createApp } from 'vue'

import App from './App07.vue'
import CompTwo from './components/Comp07a.vue'

const app = createApp(App)
app.component('comp-two', CompTwo)
app.mount('#app')