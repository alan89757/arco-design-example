import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import 'ant-design-vue/dist/antd.css'
import './style.css';

const app = createApp(App);
app.use(Antd);
// app.use(ArcoVue);
app.mount('#app');