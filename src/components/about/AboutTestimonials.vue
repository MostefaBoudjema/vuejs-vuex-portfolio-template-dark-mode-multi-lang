<template>
	<section class="py-8">
		<div class="flex justify-center pt-1 pb-8">
			<p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
				{{ t("Testimonials") }}
			</p>
		</div>

		<Carousel :itemsToShow="1.5" :wrapAround="true" :mouseDrag="true" :autoplay="4000" 
			:breakpoints="{
				640: {
					itemsToShow: 1.5
				},
				768: {
					itemsToShow: 2.5
				},
				1024: {
					itemsToShow: 3.5
				}
			}"
			class="container mx-auto">
			<Slide v-for="(testimonial, idx) in testimonials" :key="idx">
				<div
					class="testimonial-slide bg-white dark:bg-secondary-dark shadow rounded-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-ternary-dark mx-2 h-full">
					<img :src="testimonial.avatar" alt="avatar"
						class="w-24 h-24 rounded-full mb-4 border-2 border-gray-200 dark:border-ternary-dark" />
					<p class="text-gray-700 dark:text-gray-200 italic mb-2">"{{ testimonial.quote }}"</p>
					<span class="font-semibold text-gray-900 dark:text-primary-light">- {{ testimonial.name }}</span>
					<span class="text-sm text-gray-500 dark:text-gray-400">{{ t(testimonial.role) }}</span>
				</div>
			</Slide>
			<template #addons>
				<Navigation />
			</template>
		</Carousel>
	</section>
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import testimonials from '@/data/testimonials.js';
import { useI18n } from 'vue-i18n';

const { t }=useI18n();
</script>

<style scoped>
.testimonial-slide {
  min-height: 340px; /* Adjust as needed */
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>