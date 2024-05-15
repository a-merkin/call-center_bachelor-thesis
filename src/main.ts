import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vue-final-modal/style.css'
import ru from 'element-plus/dist/locale/ru.mjs'


const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: ru
})
app.use(vfm)

app.mount('#app')
