import { createApp } from 'vue';

import { router, setupRouter } from '@/router';

import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // 配置路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
