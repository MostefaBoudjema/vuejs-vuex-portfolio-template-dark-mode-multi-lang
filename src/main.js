import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/app.css';

const feather=require('feather-icons');
feather.replace();

import GlobalComponents from './mixin/globalComponents';

const app=createApp(App);
app.use(GlobalComponents);

app.config.devtools=true;
app.mount('#app');

const appTheme=localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme==='dark'&&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
