import { ref } from '@vue/reactivity';

export default function useLangSwitcher() {
	const currentLang = ref('ar');

	function toggleLang() {
		if (currentLang.value == 'en') {
			setLightLang();
		} else {
			setDarkLang();
		}
	}

	// Light Lang Function
	function setLightLang() {
		currentLang.value = 'ar';

		process.isClient && localStorage.setItem('lang', 'ar');
	}

	// Dark Lang Function
	function setDarkLang() {
		currentLang.value = 'en';

		process.isClient && localStorage.setItem('lang', 'en');
	}

	return {
		toggleLang,
	};
}
