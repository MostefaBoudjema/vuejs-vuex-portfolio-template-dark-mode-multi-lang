
<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<!-- Abouts Skills -->
			<AboutEmplymentHistory />

		<!-- Abouts Skills -->
			<AboutsSkills />

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutClients />
		</div>
	</div>
</template>
<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutClients from '@/components/about/AboutClients';
import AboutEmplymentHistory from '@/components/about/AboutEmplymentHistory';
import AboutsSkills from '@/components/about/AboutsSkills.vue';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		AboutClients,
		AboutsSkills,
		AboutEmplymentHistory,
	},
	data: () => {
		return {};
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
<style scoped></style>
