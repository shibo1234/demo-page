import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'  
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
for (const name in ElIcons) {  
  app.component(name, ElIcons[name])  
}  
app.use(ElementPlus);  
app.mount('#app')
