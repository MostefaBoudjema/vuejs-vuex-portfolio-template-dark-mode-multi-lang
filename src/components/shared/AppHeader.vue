<script>
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HireMeModal from "@/components/HireMeModal.vue";
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import Button from "@/components/reusable/Button.vue";
import settings from "@/data/configs";
import upwork from "@/assets/images/upworkIcon.png";
export default {
    components: {
        ThemeSwitcher,
        LanguageSwitcher,
        HireMeModal,
        AppHeaderLinks,
        Button,
    },
    data() {
        return {
            isOpen: false,
            settings,
            theme: "",
            lang: "",
            modal: false,
        };
    },

    created() {
        this.theme=localStorage.getItem("theme")||"light";
        this.lang=localStorage.getItem("lang")||"en";
    },
    // mounted() {
    //     feather.replace();
    //     this.theme = localStorage.getItem("theme") || "light";
    //     this.lang = localStorage.getItem("lang") || "ar";
    // },
    methods: {
        updateTheme(theme) {
            this.theme=theme;
        },
        updateLang(lang) {
            this.lang=lang;
        },
        showModal() {
            if (this.modal) {
                // Stop screen scrolling
                document
                    .getElementsByTagName("html")[0]
                    .classList.remove("overflow-y-hidden");
                this.modal=false;
            } else {
                document
                    .getElementsByTagName("html")[0]
                    .classList.add("overflow-y-hidden");
                this.modal=true;
            }
        },
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
    <nav id="nav" class="sm:container sm:mx-auto">
        <!-- Header start -->
        <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center px-4 sm:px-0">
                <!-- Header logos -->
                <div>
                    <router-link :to="{ name: 'Home' }"><img v-if="theme === 'light'" :src="settings.logo_dark"
                            class="w-36" alt="Dark Logo" />
                        <img v-else :src="settings.logo_light" class="w-36" alt="Light Logo" />
                    </router-link>
                </div>

                <language-switcher v-if="settings.show_multi_lang" :lang="lang" :theme="theme"
                    @themeChanged="updateLang"
                    class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />
                <!-- Theme switcher small screen -->
                <theme-switcher :theme="theme" @themeChanged="updateTheme"
                    class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />

                <!-- Small screen hamburger menu -->
                <div class="sm:hidden">
                    <button @click="isOpen = !isOpen" type="button" class="focus:outline-none"
                        aria-label="Hamburger Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
                            <path v-if="isOpen" fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                clip-rule="evenodd"></path>
                            <path v-if="!isOpen" fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Header links -->
            <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

            <!-- Header right section buttons -->
            <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">


                <language-switcher v-if="settings.show_multi_lang" :lang="lang" :theme="theme"
                    @themeChanged="updateLang"
                    class="bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />

                <!-- Hire me button -->
                <!-- <div class="hidden md:block" v-if="settings.show_hire_me">
                    <Button
                        :title="$t('Hire Me')"
                        class="text-md font-general-medium bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                        @click="showModal()"
                        aria-label="Hire Me Button"
                    />
                </div> -->
                <!-- Theme switcher large screen -->
                <theme-switcher :theme="theme" @themeChanged="updateTheme"
                    class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
                <div class="hidden md:block" v-if="settings.show_hire_me">
                    <a href="https://www.upwork.com/freelancers/mostefaboudjema" target="_blank"><Button
                            :title="$t('Hire Me')"
                            class="ml-8 text-md font-general-medium bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                            @click="showModal()" aria-label="Hire Me Button">
                            <img :src='require("@/assets/images/upworkIcon.png")' alt="">
                        </Button>
                    </a>
                </div>

            </div>
        </div>

        <!-- Hire me modal -->
        <HireMeModal v-if="settings.show_hire_me" :showModal="showModal" :modal="modal"
            :categories="settings.categories" aria-modal="Hire Me Modal" />
    </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
    @apply text-blue-700;
    @apply dark:text-blue-400;
    @apply font-medium;
}
</style>
