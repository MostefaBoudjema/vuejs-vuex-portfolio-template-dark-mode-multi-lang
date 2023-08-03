<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<a :href="client.link" target="_blank" rel="noopener noreferrer">
			<img :src="client.img" :alt="client.title"
				class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light" />
		</a>
	</div>
</template>

<style lang="scss" scoped></style>
