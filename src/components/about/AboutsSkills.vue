

<script >

import { useI18n } from "vue-i18n";
// import CustomButton from '../reusable/CustomButton.vue';
export default {
    setup() {
        const { t }=useI18n({
            inheritLocale: true,
            useScope: "local",
        });



        return { t };
    },
    // components: { CustomButton },
}
</script>

<template>
    <div class=" bg-primary-light dark:bg-ternary-dark mx-auto py-12">
        <div class="flex justify-center pt-1 pb-8">
            <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
                {{ t("Skills") }}
            </p>
        </div>
        <div class="container mx-auto">
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-blue-500 bg-transparent border border-blue-500 hover:border-blue-600 rounded-md focus:ring-1 focus:ring-blue-900">React</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-green-500 bg-transparent border border-green-500 hover:border-green-600 rounded-md focus:ring-1 focus:ring-green-900">Vue3</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-orange-500 bg-transparent border border-orange-500 hover:border-orange-600 rounded-md focus:ring-1 focus:ring-orange-900">Laravel</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-purple-500 bg-transparent border border-purple-500 hover:border-purple-600 rounded-md focus:ring-1 focus:ring-purple-900">PHP</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-lime-500 bg-transparent border border-lime-500 hover:border-lime-600 rounded-md focus:ring-1 focus:ring-lime-900">JSON</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-orange-500 bg-transparent border border-orange-500 hover:border-orange-600 rounded-md focus:ring-1 focus:ring-orange-900">GIT</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-purple-500 bg-transparent border border-purple-500 hover:border-purple-600 rounded-md focus:ring-1 focus:ring-purple-900">Bootstrap</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-red-500 bg-transparent border border-red-500 hover:border-red-600 rounded-md focus:ring-1 focus:ring-red-900">npm</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-green-500 bg-transparent border border-green-500 hover:border-green-600 rounded-md focus:ring-1 focus:ring-green-900">Node.js</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-purple-500 bg-transparent border border-purple-500 hover:border-purple-600 rounded-md focus:ring-1 focus:ring-purple-900">Webpack</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-blue-500 bg-transparent border border-blue-500 hover:border-blue-600 rounded-md focus:ring-1 focus:ring-blue-900">Vite</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-green-500 bg-transparent border border-green-500 hover:border-green-600 rounded-md focus:ring-1 focus:ring-green-900">SPA</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-blue-500 bg-transparent border border-blue-500 hover:border-blue-600 rounded-md focus:ring-1 focus:ring-blue-900">TypeScript</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-lime-500 bg-transparent border border-lime-500 hover:border-lime-600 rounded-md focus:ring-1 focus:ring-lime-900">
                Architecture MVC</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-red-500 bg-transparent border border-red-500 hover:border-red-600 rounded-md focus:ring-1 focus:ring-red-900">
                Architecture MVVM</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-cyan-500 bg-transparent border border-cyan-500 hover:border-cyan-600 rounded-md focus:ring-1 focus:ring-cyan-900">Tailwind
                CSS</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-green-500 bg-transparent border border-green-500 hover:border-green-600 rounded-md focus:ring-1 focus:ring-green-900">Nuxt
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-orange-500 bg-transparent border border-orange-500 hover:border-orange-600 rounded-md focus:ring-1 focus:ring-orange-900">SQL
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-yellow-500 bg-transparent border border-yellow-500 hover:border-yellow-600 rounded-md focus:ring-1 focus:ring-yellow-900">Linux
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-blue-500 bg-transparent border border-blue-500 hover:border-blue-600 rounded-md focus:ring-1 focus:ring-blue-900">JQuery
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-sky-500 bg-transparent border border-sky-500 hover:border-sky-600 rounded-md focus:ring-1 focus:ring-sky-900">Wordpress
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-yellow-500 bg-transparent border border-yellow-500 hover:border-yellow-600 rounded-md focus:ring-1 focus:ring-yellow-900">Javascript
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-cyan-500 bg-transparent border border-cyan-500 hover:border-cyan-600 rounded-md focus:ring-1 focus:ring-cyan-900">Rest
                APIs
            </button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-blue-500 bg-transparent border border-blue-500 hover:border-blue-600 rounded-md focus:ring-1 focus:ring-blue-900">Backend
                Developement</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-teal-500 bg-transparent border border-teal-500 hover:border-teal-600 rounded-md focus:ring-1 focus:ring-teal-900">FullStack
                Developement</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-rose-500 bg-transparent border border-rose-500 hover:border-rose-600 rounded-md focus:ring-1 focus:ring-rose-900">Frontend
                Developement</button>
            <button
                class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 text-teal-500 bg-transparent border border-teal-500 hover:border-teal-600 rounded-md focus:ring-1 focus:ring-teal-900">
                Apache
            </button>
        </div>
        <!-- <CustomButton :title="$t('React')" color="blue"/> -->
    </div>
</template>