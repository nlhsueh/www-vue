import { createApp } from 'vue'

import App from './App08d.vue'
import slot from './components/Slot08d.vue'

const app = createApp(App)
app.component('slot-comp', slot)
app.mount('#app')