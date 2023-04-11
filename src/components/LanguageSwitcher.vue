<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
	name: 'Home',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    
    return { t }
  },
	props: {
		lang: {
			type: String,
			required: true,
		},
		theme: {
			type: String,
			required: true,
		},
	},
	methods: {
		togglelang() {
			const newlang = this.lang === 'ar' ? 'en' : 'ar';
			localStorage.setItem('lang', newlang);
			this.$emit('lang-changed', newlang);
			this.$router.go();
		},
	},
});

</script>

<template>
	<a href="#" @click.prevent="togglelang" aria-label="lang Switcher">
		<i
			v-if="theme === 'light'"
			class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"
		>{{t(lang)}}</i>
		<i
			v-else
			class="text-gray-200 hover:text-gray-50 w-5"
		>{{t(lang)}}</i>
	</a>
</template>

<style scoped>
i{
	font-family:  GeneralSans-Regular;
	font-weight: 600;
	/* color: black; */
}
</style>
