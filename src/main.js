import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import loading from './directives/loading'
const app = createApp(App)

app.directive('loading', loading)
app.mount('#app')
