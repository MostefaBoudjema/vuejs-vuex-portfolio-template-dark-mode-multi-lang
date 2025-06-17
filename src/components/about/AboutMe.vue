<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-2/6 mb-7 sm:mb-0">
      <img v-lazy="settings.profile_photo" class="rounded-xl w-96" alt="" />
      <DownloadCv />
      <ContactBtn />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-4/6 text-left">
      <p v-for="bio in bios" :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
        {{ bio.bio }}
      </p>
    </div>
    <!-- About details -->
    <!-- <div class="w-full sm:w-3/6 text-left">
      <div class="flex justify-center mt-10 sm:mt-20">
        <iframe width="560" height="315" :src="settings.videoLinkEn" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import i18n from '@/i18n';
import settings from '@/data/configs';
import DownloadCv from '@/components/shared/DownloadCv.vue';
import ContactBtn from '@/components/shared/ContactBtn.vue';

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