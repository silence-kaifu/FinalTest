import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
// import requests from './store/axios';
import 'element-plus/lib/theme-chalk/index.css';
import axios from "axios";
const app = createApp(App)
            .use(store)
            .use(ElementPlus)
            .use(router)
            .mount('#app');
(app as any).config.globalProperties.$http=axios;
// router.isReady().then(() => app.mount('#app'))