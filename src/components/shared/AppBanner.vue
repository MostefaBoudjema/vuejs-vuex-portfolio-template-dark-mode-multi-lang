<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left" data-aos="fade-right" data-aos-delay="200">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
        {{ t("Hi, Iam Mostfa") }}
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400">
        {{ t("Job Title") }}
      </p>
      <DownloadCv />

      <ContactBtn />

    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <DotLottieVue style="height: 600px;" autoplay loop
        src="https://lottie.host/e3d2a44b-7d02-4b19-8d05-e90af78f1571/FGAlWtRxOu.lottie" />
      <!-- <DotLottieVue style="height: 600px;" autoplay loop src="https://lottie.host/92926995-bda3-46ba-943f-51ae646541df/0E3TNpU72O.lottie" /> -->
    </div>
    <!-- <div class="w-full md:w-2/3 text-right float-right">
        <img v-if="theme === 'light'" :src="settings.hero_image" alt="Developer" data-aos="fade-right" data-aos-delay="200" />
        <img v-else :src="settings.hero_image_dark" alt="Developer" data-aos="fade-right" data-aos-delay="200" />
      </div> -->
  </section>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import feather from 'feather-icons';
import { useI18n } from 'vue-i18n';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import settings from '@/data/settings';
import DownloadCv from './DownloadCv.vue';
import ContactBtn from './ContactBtn.vue';

const { t }=useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const theme=ref(localStorage.getItem('theme')||'light');
const lang=ref(localStorage.getItem('lang')||'ar');

onMounted(() => {
  feather.replace();
  theme.value=localStorage.getItem('theme')||'light';
  lang.value=localStorage.getItem('lang')||'ar';
});

onUpdated(() => {
  feather.replace();
});
</script>

<style scoped></style>