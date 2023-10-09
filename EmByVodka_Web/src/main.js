import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.scss'
import { createApp } from 'vue'
import App from './App'
import router from './router'

createApp(App).use(router).mount('#app')

