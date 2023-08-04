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
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "local",
        });

        

        return { t };
    },
};
</script>


<template>
    <div class="container mx-auto p-4 mt-5 text-primary-dark dark:text-primary-light">
        <h1 class="text-2xl font-semibold mb-4">{{$t('Employment History')}}</h1>
        <div v-for="(job, index) in employmentHistory" :key="index" class="rounded p-4 mb-4">
            <h2 class="text-xl font-semibold">{{ job.title }}</h2>
            <p class="text-gray-600">{{ job.company }}</p>
            <p class="text-gray-600">{{ job.startDate }} - {{ job.endDate }}</p>
            <p class="mt-2">{{ job.description }}</p>
        </div>
    </div>
</template>
  