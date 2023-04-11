<script>
import { useI18n } from "vue-i18n";
// import i18n from '../../i18n';
// const { t } = i18n.global;
export default {
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });

        

        return { t };
    },
	props: {
		
		select: {
			type: String,
			default: 'projects',
			required: true,
		},
		selectOptions: {
			
			type: Array,
			default: () => [
				// t('Ecommerce'),
				// t('Elearn'),
				// t('Business Website'),
				// t('Blogs'),
				// t('Portfolio'),
				'Laravel Application',
				'Laravel Vue Application',
				'Wordpress site',
				'Vue App',
			],
		},
	},
};
</script>

<template>
	<select
		@change="$emit('filter', $event.target.value)"
		:name="select"
		:id="select"
		class="font-general-medium
				px-4
				py-2
				border-1 border-gray-200
				dark:border-secondary-dark
				rounded-lg
				text-sm
				sm:text-md
				bg-secondary-light
				dark:bg-ternary-dark
				text-primary-dark
				dark:text-ternary-light
			"
	>
		<option value class="text-sm sm:text-md">{{t("All Projects")}}</option>
		<option
			v-for="option in selectOptions"
			:key="option"
			:value="option"
			class="sm:text-md"
		>
			{{ option }}
		</option>
	</select>
</template>

<style lang="scss" scoped></style>
