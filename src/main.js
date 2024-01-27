import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Create pinis instance
const pinia = createPinia();

const app = createApp(App)

// Use pinia Instance
app.use(pinia)
app.mount('#app')

