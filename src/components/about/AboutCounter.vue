<template>
    <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
        <!-- About me counters -->
        <div class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center">
            <!-- Years of experience counter -->
            <div class="mb-20 sm:mb-0">
                <counter ref="counter" :startAmount="0" :endAmount="currentYearMinus2017" :duration="1" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
                    aria-label="About Status Counter" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">
                    {{ experienceTitle }}
                </span>
            </div>

            <!-- GitHub stars counter -->
            <div class="mb-20 sm:mb-0">
                <counter ref="counter" :startAmount="0" :endAmount="17" :duration="1" suffix="k+" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">{{ githubTitle }}</span>
            </div>

            <!-- Positive feedback counter -->
            <div class="mb-20 sm:mb-0">
                <counter ref="counter" :startAmount="0" :endAmount="92" :duration="1" suffix="%" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">
                    {{ feedbackTitle }}
                </span>
            </div>

            <!-- Projects completed counter -->
            <div class="mb-20 sm:mb-0">
                <counter ref="counter" :startAmount="0" :endAmount="87" :duration="1" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">
                    {{ projectsTitle }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import counter from "vue3-autocounter";
import i18n from '@/i18n';
const { t }=i18n.global;

export default {
    components: {
        counter,
    },
    data: () => {
        return {
            experienceTitle: t("Years of experience"),
            githubTitle: t("Stars on GitHub"),
            feedbackTitle: t("Positive feedback"),
            projectsTitle: t("Projects completed"),
            currentYear: new Date().getFullYear(),
            currentYearMinus2017: 0,
        };
    },
    mounted() {
        this.currentYearMinus2017=this.currentYear-2017;
    }
};
</script>
