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
    <div class="container mx-auto p-4 mt-5 text-primary-dark dark:text-primary-light">
        <h1 class="text-2xl font-semibold m-3">{{ $t('Employment History') }}</h1>
        <div v-for="(job, index) in employmentHistory" :key="index" class="flex  flex-col my-12 container ">
            <div class="p-4 mb-4 mx-96 rounded border border-ternary-light dark:border-ternary-dark">
                <div class="rounded  flex flex-row justify-between items-center ">                    
                    <img class="w-24 py-3 px-2 border shadow-sm rounded-lg m-1 cursor-pointer dark:bg-secondary-light"
                    :src="job.logo" alt="logo" />
                    <div class="flex-initial w-64">
                        <h2 class="text-xl font-semibold">{{ job.title }}</h2>
                        <p class="dark:text-gray-200">{{ job.company }}</p>
                        <p class="dark:text-gray-200">{{ job.startDate }} - {{ job.endDate }}</p>
                    </div>
                </div>
                <div>
                    <p class="mt-8 text-center">{{ job.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  