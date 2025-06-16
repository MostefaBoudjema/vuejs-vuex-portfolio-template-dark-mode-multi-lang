<template>
	<div class="flex justify-center mt-10 sm:mt-20">
		<iframe
			width="560"
			height="315"
			:src="settings.videoLinkEn"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</template>


<script setup>
import i18n from '@/i18n';
import settings from '@/data/settings';

const { t }=i18n.global;

const bios=[
	{ id: 1, bio: t('AboutMe1') },
	{ id: 2, bio: t('AboutMe2') },
	{ id: 3, bio: t('AboutMe3') },
	{ id: 4, bio: t('AboutMe4') },
	{ id: 5, bio: t('AboutMe5') },
];
</script>

<style scoped></style>