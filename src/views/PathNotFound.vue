<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import settings from "../data/settings";

const { t }=useI18n({
    inheritLocale: true,
    useScope: "global",
});

const theme=ref("light"); // Assuming theme is a reactive property; adjust if it's sourced differently
</script>

<template>
    <div class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 p-10">
        <div>
            <img v-if="theme === 'light'" :src="settings.page_404" alt="Developer" />
            <img v-else :src="settings.page_404" alt="Developer" />
        </div>

        <div class="Notfound md:w-1/2">
            <h1 class="text-blue-300">{{ t("404 Page Not found") }}</h1>
        </div>
    </div>
</template>

<style scoped>
.Notfound {
    font-size: 54px;
    font-family: GeneralSans-BoldItalic;
    text-align: center;
    font-weight: 900;
    padding-left: 5%;
    /* font-family: GeneralSans-Bold, Avenir, Helvetica, Arial, sans-serif; */
    /* color: white; */
}
</style>
