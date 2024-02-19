// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'

// jQuery
window.$ = window.jQuery = require('jquery');

createApp(App).use(router).mount('#app')