import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus';
import App from './App.vue';
import { getServerConfig } from './config';
import { MotionPlugin } from '@vueuse/motion';
import { useI18n } from '@/plugins/i18n';

// 引入重置样式
import './styles/reset.scss';
// 导入公共样式
import './styles/index.scss';
import './styles/tailwind.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

getServerConfig(app).then(async config => {
  app.use(router);
  await router.isReady();
  app.use(MotionPlugin).use(useI18n).use(ElementPlus);
  app.mount('#app');
});
