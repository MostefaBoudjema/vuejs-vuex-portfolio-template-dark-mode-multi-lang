<script>
import feather from "feather-icons";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import settings from "../../data/settings"
 
export default defineComponent({
    name: "Home",
    setup() {
        const { t }=useI18n({
            inheritLocale: true,
            useScope: "local",
        });



        return { t };
    },

    data: () => {
        return {
            theme: "",
            lang: "",
            settings
        };
    },
    created() {
        this.theme=localStorage.getItem("theme")||"light";

        this.lang=localStorage.getItem("lang")||"ar";
    },
    mounted() {
        feather.replace();
        this.theme=localStorage.getItem("theme")||"light";

        this.lang=localStorage.getItem("lang")||"ar";
    },
    updated() {
        feather.replace();
    },
    methods: {},
});
</script>

<template>
    <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
        <!-- Banner left contents -->
        <div class="w-full md:w-1/3 text-left"   data-aos="fade-right" data-aos-delay="200">
            <h1
                class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
                {{ t("Hi, Iam Mostfa") }}
            </h1>
            <p
                class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400">
                {{ t("Job Title") }}
            </p>
            <div class="flex justify-center sm:block" v-if="settings.show_cv">
                <a download="Mostefa-Boudjema-Resume.pdf" :href="settings.cv_path"
                    class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-blue-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-blue-50 focus:ring-1 focus:ring-blue-900 hover:bg-blue-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume">
                    <i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
                    <span class="text-sm sm:text-lg font-general-medium duration-100">{{ t("Download CV") }}</span></a>
            </div>
        </div>

        <!-- Banner right illustration -->
        <div class="w-full md:w-2/3 text-right float-right">
            <img v-if="theme === 'light'" :src="settings.hero_image" alt="Developer"  data-aos="fade-right" data-aos-delay="200"/>
            <img v-else :src="settings.hero_image_dark" alt="Developer"  data-aos="fade-right" data-aos-delay="200"/>

        </div>
    </section>
</template>

<style scoped></style>
