<script>
import { useI18n } from "vue-i18n";
export default {
    name: "Home",
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "local",
        });

        

        return { t };
    },
    props: ["showModal", "isOpen"],
};
</script>

<template>
    <!-- Header links -->
    <div
        :class="isOpen ? 'block' : 'hidden'"
        class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
    >
        <router-link
            :to="{ name: 'Projects' }"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
            >{{ t("Projects") }}</router-link
        >
        <router-link
            :to="{ name: 'About' }"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
            >{{ t("About Me") }}</router-link
        >
        <router-link
            :to="{ name: 'Contact' }"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
            >{{ t("Contact") }}</router-link
        >
        <div
            class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        >
            <button
                class="font-general-medium sm:hidden block text-left text-md font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
                @click="showModal()"
                aria-label="Hire Me Button"
            >
                {{ t("Hire Me") }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
