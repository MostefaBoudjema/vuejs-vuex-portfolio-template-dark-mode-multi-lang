<template>
    <div class="bg-primary-light dark:bg-ternary-dark mx-auto py-12" >
        <div class="flex justify-center pt-1 pb-8">
            <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
                {{ t("Skills") }}
            </p>
        </div>
        <div class="container mx-auto"  data-aos="fade-right">
            <transition-group name="fade" tag="div" class="flex flex-wrap">
                <button v-for="skill in skillsWithDelay" :key="skill.id"
                    class="m-3 px-4 sm:px-6 py-2 sm:py-2.5 bg-transparent border rounded-md focus:ring-1"
                    :class="skill.classes">
                    {{ skill.label }}
                </button>
            </transition-group>
        </div>
    </div>
</template>
  
  
  

<script >
import { useI18n } from "vue-i18n";
export default {
    setup() {
        const { t }=useI18n({
            inheritLocale: true,
            useScope: "local",
        });
        return { t };
    }, data() {
        return {
            skills: [
                { id: 1, label: 'React', classes: 'text-blue-500 border-blue-500 hover:border-blue-600 focus:ring-blue-900' },
                { id: 2, label: 'Vue3', classes: 'text-green-500 border-green-500 hover:border-green-600 focus:ring-green-900' },
                { id: 3, label: 'Laravel', classes: 'text-orange-500 border-orange-500 hover:border-orange-600 focus:ring-orange-900' },
                { id: 4, label: 'PHP', classes: 'text-purple-500 border-purple-500 hover:border-purple-600 focus:ring-purple-900' },
                { id: 5, label: 'JSON', classes: 'text-lime-500 border-lime-500 hover:border-lime-600 focus:ring-lime-900' },
                { id: 6, label: 'GIT', classes: 'text-orange-500 border-orange-500 hover:border-orange-600 focus:ring-orange-900' },
                { id: 7, label: 'Bootstrap', classes: 'text-purple-500 border-purple-500 hover:border-purple-600 focus:ring-purple-900' },
                { id: 8, label: 'npm', classes: 'text-red-500 border-red-500 hover:border-red-600 focus:ring-red-900' },
                { id: 9, label: 'Node.js', classes: 'text-green-500 border-green-500 hover:border-green-600 focus:ring-green-900' },
                { id: 10, label: 'Webpack', classes: 'text-purple-500 border-purple-500 hover:border-purple-600 focus:ring-purple-900' },
                { id: 11, label: 'Vite', classes: 'text-blue-500 border-blue-500 hover:border-blue-600 focus:ring-blue-900' },
                { id: 12, label: 'SPA', classes: 'text-green-500 border-green-500 hover:border-green-600 focus:ring-green-900' },
                { id: 13, label: 'TypeScript', classes: 'text-blue-500 border-blue-500 hover:border-blue-600 focus:ring-blue-900' },
                { id: 14, label: 'Architecture MVC', classes: 'text-lime-500 border-lime-500 hover:border-lime-600 focus:ring-lime-900' },
                { id: 15, label: 'Architecture MVVM', classes: 'text-red-500 border-red-500 hover:border-red-600 focus:ring-red-900' },
                { id: 16, label: 'Tailwind CSS', classes: 'text-cyan-500 border-cyan-500 hover:border-cyan-600 focus:ring-cyan-900' },
                { id: 17, label: 'Nuxt', classes: 'text-green-500 border-green-500 hover:border-green-600 focus:ring-green-900' },
                { id: 18, label: 'SQL', classes: 'text-orange-500 border-orange-500 hover:border-orange-600 focus:ring-orange-900' },
                { id: 19, label: 'Linux', classes: 'text-yellow-500 border-yellow-500 hover:border-yellow-600 focus:ring-yellow-900' },
                { id: 20, label: 'JQuery', classes: 'text-blue-500 border-blue-500 hover:border-blue-600 focus:ring-blue-900' },
                { id: 21, label: 'Wordpress', classes: 'text-sky-500 border-sky-500 hover:border-sky-600 focus:ring-sky-900' },
                { id: 22, label: 'Javascript', classes: 'text-yellow-500 border-yellow-500 hover:border-yellow-600 focus:ring-yellow-900' },
                { id: 23, label: 'Rest APIs', classes: 'text-cyan-500 border-cyan-500 hover:border-cyan-600 focus:ring-cyan-900' },
                { id: 24, label: 'Backend Development', classes: 'text-blue-500 border-blue-500 hover:border-blue-600 focus:ring-blue-900' },
                { id: 25, label: 'FullStack Development', classes: 'text-teal-500 border-teal-500 hover:border-teal-600 focus:ring-teal-900' },
                { id: 26, label: 'Frontend Development', classes: 'text-rose-500 border-rose-500 hover:border-rose-600 focus:ring-rose-900' },
                { id: 27, label: 'Apache', classes: 'text-teal-500 border-teal-500 hover:border-teal-600 focus:ring-teal-900' },

            ],
            transitionDelay: 500, // Adjust the delay duration as needed
        };
    },
    computed: {
        skillsWithDelay() {
            return this.skills.map((skill, index) => ({
                ...skill,
                transitionDelay: `${index*this.transitionDelay}ms`,
            }));
        },
    },
}
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>