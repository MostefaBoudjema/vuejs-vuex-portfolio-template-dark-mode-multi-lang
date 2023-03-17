<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'An experienced PHP web developer specializing in building Laravel web applications. I have done many front and back-end development projects.',
				},
				{
					id: 2,
					bio:
						'Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects.',
				},
				{
					id: 3,
					bio:
						'I\'m Well-versed in numerous programming languages including HTML5, PHP OOP, JavaScript, CSS, MySQL. Strong background in project management and customer relations.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/me2.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
