<script setup>
import { useI18n } from 'vue-i18n';
import { ref, defineProps, defineEmits } from 'vue';

const props=defineProps({
	lang: {
		type: String,
		required: true,
	},
	theme: {
		type: String,
		required: true,
	},
});

const emit=defineEmits(['lang-changed']);

const { t }=useI18n({
	inheritLocale: true,
	useScope: 'local',
});

const togglelang=() => {
	const newlang=props.lang==='ar'? 'en':'ar';
	localStorage.setItem('lang', newlang);
	emit('lang-changed', newlang);
	location.reload(); // Refresh the page
};
</script>

<template>
	<a href="#" @click.prevent="togglelang" aria-label="lang Switcher">
		<i v-if="theme === 'light'"
			class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5">{{
		t(lang) }}</i>
		<i v-else class="text-gray-200 hover:text-gray-50 w-5">{{ t(lang) }}</i>
	</a>
</template>

<style scoped>
i {
	font-family: GeneralSans-Regular;
	font-weight: 600;
	/* color: black; */
}
</style>
