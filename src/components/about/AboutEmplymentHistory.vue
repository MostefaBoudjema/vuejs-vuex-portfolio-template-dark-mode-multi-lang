<script>

import { useI18n } from "vue-i18n";

import EmplymentHistory from '../../data/EmplymentHistory';
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
    <div class=" mb-8 ">
        <div class="p-4 mt-5 text-primary-dark dark:text-primary-light flex flex-wrap justify-center">
            <h1 class="w-full text-2xl font-semibold mb-3">{{ $t('Employment History') }}</h1>
        </div>
        <div class="flex justify-center">
            <div class="flex justify-center items-stretch space-x-4">
                <!-- Assuming employmentHistory contains exactly 3 elements -->
                <div v-for="(job, index) in employmentHistory" :key="index" class="max-w-[30%] flex-1 dark:text-gray-200">
                    <div class="p-8 mb-4 rounded border border-ternary-light dark:border-ternary-dark h-full">

                        <div class="flex justify-between items-center">
                            <img class="w-24 py-3 px-2 border shadow-sm rounded-lg m-1 cursor-pointer dark:bg-secondary-light"
                                :src="job.logo" alt="logo" />
                            <div class="flex-1">
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
    </div>
</template>
  