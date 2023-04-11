<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<ProjectsGrid :full="true"/>
	</div>
</template>

<style scoped></style>
