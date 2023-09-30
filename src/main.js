import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "@/store";
import './assets/css/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BackToTop from 'vue-backtotop';
import i18n from './i18n';

import VueAnalytics from 'vue-analytics';

const feather = require('feather-icons');
feather.replace();

const app = createApp(App);
app.use(i18n)
	.use(router)
	.use(store)
	.use(BackToTop)
	.use(VueAnalytics, {
		id: 'G-459NGJ4ZD7', // Replace with your Google Analytics tracking code
		router
	  });

app.config.devtools = true;
window.i18n = i18n;
app.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
