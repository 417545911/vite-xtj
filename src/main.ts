import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus';
import App from './App.vue';

import 'element-plus/dist/index.css';

async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  await router.isReady();
  app.use(ElementPlus);
  app.mount('#app');
}

bootstrap();
