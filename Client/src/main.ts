import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)//Insantiates app component 

app.use(router)

app.mount('#app')
