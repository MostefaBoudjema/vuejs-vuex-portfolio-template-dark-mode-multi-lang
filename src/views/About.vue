<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<!-- About Employment History -->
		<AboutEmplymentHistory />

		<!-- About Skills -->
		<AboutsSkills />

		<!-- About clients -->
		<div class="container mx-auto">
			<AboutClients />
		</div>
	</div>
</template>

<script setup>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutClients from '@/components/about/AboutClients';
import AboutEmplymentHistory from '@/components/about/AboutEmplymentHistory';
import AboutsSkills from '@/components/about/AboutsSkills.vue';
import feather from 'feather-icons';

import { onMounted, onUpdated } from 'vue';

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});
</script>

<style scoped></style>