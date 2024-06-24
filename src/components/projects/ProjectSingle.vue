<script setup>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { onMounted, defineProps } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props=defineProps({
    project: {
        type: Object,
        required: true
    }
});

const { t }=useI18n({
    inheritLocale: true,
    useScope: "global",
});

const store=useStore();
const setPageId=(id) => store.dispatch('setPageId', id);
onMounted(() => {
    let mm=gsap.matchMedia();
    mm.add("(min-width: 991px)", () => {

        let tween=gsap.fromTo(".single", {
            opacity: 0,
            y: 80
        }, {
            scrollTrigger: {
                trigger: ".single",
                start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: 0.3,
            stagger: 0.2,
            ease: "elastic",
        });
    });
});
</script>

<template>
    <div v-if="!props.project.hide">
        <div>
            <router-link :to="{ name: props.project.link }" @click="setPageId(props.project.id)"
                class="single rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
                aria-label="Single Project" style="position: relative; display: inline-block;">
                <img v-lazy="props.project.img" :alt="props.project.title" class="rounded-t-xl border-none"
                    style="width: 100%; height: auto;" />
                <template v-for="(smallImg, index) in props.project.smallImages" :key="index">
                    <img v-lazy="smallImg.src" :alt="smallImg.alt" :style="{
        position: 'absolute',
        top: index * 50 + 'px',
        right: '0',
        width: smallImg.width || '50px',
        height: smallImg.height || '50px',
    }" />
                </template>
            </router-link>
        </div>
        <div class="text-center px-4 py-6 d-flex justify-content-center align-items-center">
            <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
                {{ t(props.project.title) }}
                <a class="text-lg text-center text-link d-flex"
                    v-if="props.project.projectInfo.companyInfos[2].details != '#'"
                    :href="props.project.projectInfo.companyInfos[2].details" target="_blank">
                    <i class="bi bi-box-arrow-up-right text-blue-500 px-2"></i>
                </a>
            </p>
            <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light pb-5">
                {{ t(props.project.category) }}
            </span>
            <br v-if="props.project.projectInfo.companyInfos[2].details != '#'" />
            <br v-if="props.project.projectInfo.companyInfos[2].details != '#'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text-link {
    --tw-text-opacity: 1;
    text-align: center;
    color: rgb(60 50 256 / var(--tw-text-opacity));
}
</style>
