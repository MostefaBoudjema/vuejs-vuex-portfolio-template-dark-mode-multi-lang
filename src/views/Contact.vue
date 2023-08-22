<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

import settings from "../data/settings";
export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			settings,
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm v-if="settings.show_contact_form"/>
        <div v-else class="mr-16">
            <img :src="settings.profile_photo" class="rounded-xl w-96" alt="" />
        </div>
		<!-- Contact details -->
		<ContactDetails :contacts="settings.contacts" />
	</div>
</template>
