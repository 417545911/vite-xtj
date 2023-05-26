import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus';
import App from './App.vue';
import { getServerConfig } from './config'
import { MotionPlugin } from "@vueuse/motion"

// 引入重置样式
import './styles/reset.scss';
// 导入公共样式
import './styles/index.scss';
// 一定要在main.ts中导入tailwind.css,防止vite每次hmr都会请求src/styles/index.scc整体css文件导致热更新慢的问题
import './styles/tailwind.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

getServerConfig(app).then(async config => {
  app.use(router);
  await router.isReady();
  app.use(MotionPlugin).use(ElementPlus)
  app.mount("#app")
})

