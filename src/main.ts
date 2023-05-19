import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  await router.isReady();
  app.mount('#app');
}

bootstrap();
