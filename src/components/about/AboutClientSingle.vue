<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div  data-aos="zoom-in-up">
		<!-- Check if client.link is not empty -->
		<a v-if="client.link" :href="client.link" target="_blank" rel="noopener noreferrer">
			<img v-lazy="client.img" :alt="client.title"
				class="py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light" />
		</a>
		<!-- If client.link is empty or falsy, just render the image without the anchor tag -->
		<img v-else v-lazy="client.img" :alt="client.title"
			class="py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light" />
	</div>
</template>
  

<style lang="scss" scoped></style>
