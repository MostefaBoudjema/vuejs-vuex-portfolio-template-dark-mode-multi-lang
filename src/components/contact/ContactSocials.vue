<script>
export default {
	props: ['socials'],
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2
				class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"
			>
				<!-- {{$t('Contact details')}} -->
			</h2>
			<div class="font-general-regular">
				<button class="flex text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-1 m-2 duration-500"
                    v-for="social in socials" :key="social.id">
					<i
						:data-feather="social.icon"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						href="#"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						:class="
							social.icon === 'mail' || social.icon === 'phone'
								? 'hover:underline cursor-pointer'
								: ''
						"
						aria-label="Website and Phone"
					>
						{{ social.name }}
					</a>
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
