import { createApp } from 'vue';
import App from './App.vue';

import "./assets/style.css";

import BaseHello from "./components/BaseHello.vue";

const app = createApp(App);
app.component('BaseHello', BaseHello);
app.mount('#app');
