<template>
	<div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">
		<!-- Contact form -->
		<ContactForm v-if="settings.show_contact_form" />
		<div v-else class="mr-16">
			<img v-lazy="settings.profile_photo" class="rounded-xl w-96" alt="" />
		</div>
		<!-- Contact details -->
		<ContactDetails :contacts="settings.contacts" />
		<!-- <ContactSocials :socials="socials" /> -->
	</div>
</template>

<script setup>
import feather from 'feather-icons';
import { ref, onMounted, onUpdated } from 'vue';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

import settingsData from '../data/settings';
import { socialLinks } from '../data/socialLinks';
// import ContactSocials from '../components/contact/ContactSocials.vue';

const settings=ref(settingsData);
const socials=ref(socialLinks);

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});
</script>

<style scoped></style>