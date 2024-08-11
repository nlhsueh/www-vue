import { createApp } from 'vue'

import App from './App09a.vue'
import CompOne from './components/CompOne09a.vue'
import CompTwo from './components/CompTwo09a.vue'

const app = createApp(App)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.mount('#app')