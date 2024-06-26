<script>

import { useI18n } from "vue-i18n";

import EmplymentHistory from '@/data/EmplymentHistory';
export default {
    data() {
        return {
            employmentHistory: EmplymentHistory
        };
    },
    setup() {
        const { t }=useI18n({
            inheritLocale: true,
            useScope: "local",
        });



        return { t };
    },
};
</script>


<template>
<div class="mb-8">
    <div class="p-4 mt-5 text-primary-dark dark:text-primary-light flex flex-wrap justify-center">
        <h1 class="w-full text-2xl font-semibold mb-3">{{ $t('Employment History') }}</h1>
    </div>
    <div class="flex justify-center flex-wrap">
    <div v-for="(job, index) in employmentHistory" :key="index"
         class="w-full md:w-[30%] dark:text-gray-200 mb-4 md:mb-0 md:mr-4" data-aos="zoom-in-up">
        <div class="p-8 rounded sm:border border-ternary-light dark:border-ternary-dark h-full">
            <div class="flex justify-center md:justify-between items-center">
                <img class="w-24 py-3 px-2 border shadow-sm rounded-lg m-1 cursor-pointer dark:bg-secondary-light"
                    v-lazy="job.logo" alt="logo" />
                <div class="flex-1 md:ml-4 mt-4 md:mt-0">
                    <h2 class="text-xl font-semibold">{{ job.title }}</h2>
                    <p class="">{{ job.company }}</p>
                    <p class="">{{ job.startDate }} - {{ job.endDate }}</p>
                </div>
            </div>
            <div>
                <p class="mt-8 text-center">{{ job.description }}</p>
            </div>
        </div>
    </div>
</div>

</div>

</template>
  