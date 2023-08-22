<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import settings from "../data/settings";
export default defineComponent({
    name: "PageNotfound",
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });
        return { settings,t };
    },
});
</script>

<template>
    <div
        class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 p-10"
    >
        <div class=" ">
            <img
                v-if="theme === 'light'"
                :src="settings.page_404"
                alt="Developer"
            />
            <img v-else :src="settings.page_404" alt="Developer" />
        </div>

        <div class="Notfound md:w-1/2 ">
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
