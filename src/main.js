import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as echarts from 'echarts'

createApp(App).use(store).use(router).use(echarts).mount('#app')
