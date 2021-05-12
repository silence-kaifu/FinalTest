import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import axios from './http'
import qs from 'qs'

const app = createApp(App)

// 全局挂载axios
app.config.globalProperties.$axios = axios;

app.use(ElementPlus);
app.use(store)
app.use(router)
app.mount('#app')

// router.isReady().then(() => app.mount('#app'))