<script setup>
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue';
import ContactBtn from '@/components/shared/ContactBtn.vue';
</script>

<template>
	<div class="container mx-auto">
		<ProjectsGrid :full="true"/>
		
		<ContactBtn place="center"/>
	</div>
</template>

<style scoped></style>
