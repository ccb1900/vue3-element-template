import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import './assets/style/main.scss'
import 'normalize.css/normalize.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VXETablePluginElement from 'vxe-table-plugin-element'
import 'vxe-table-plugin-element/dist/style.css'

VXETable.use(VXETablePluginElement)

const app = createApp(App)
app.use(router)
app.use(VXETable)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(createPinia())
app.mount('#app')
