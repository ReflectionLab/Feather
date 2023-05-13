import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

import 'tdesign-vue-next/es/style/index.css';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import '@/style/index.less';

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*');
});
