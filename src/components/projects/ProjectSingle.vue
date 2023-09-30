<script>
import { useI18n } from "vue-i18n";
import { mapActions } from "vuex";
export default {
    components: {},
    props: ["project"],
    setup() {
        const { t }=useI18n({
            inheritLocale: true,
            useScope: "global",
        });
        return { t };
    },
    methods: {
        ...mapActions(["setPageId"]),
    },
};
</script>

<template>
    <div v-if="!project.hide">
        <div>
            <router-link :to="{ name: project.link }" :project="project.title" @click="setPageId(project.id)"
                class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
                aria-label="Single Project" style="position: relative; display: inline-block;">
                <img :src="project.img" :alt="project.title" class="rounded-t-xl border-none"
                    style="width: 100%; height: auto;" />
                <template v-for="(smallImg, index) in project.smallImages" :key="index">
                    <img :src="smallImg.src" :alt="smallImg.alt" :style="{
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
                <!-- {{ project.title }} -->
                {{ t(project.title) }} <a class="text-lg text-center text-link d-flex"
                    v-if="project.projectInfo.companyInfos[2].details != '#'"
                    :href="project.projectInfo.companyInfos[2].details" target="_blank">
                    <i class="bi bi-box-arrow-up-right text-blue-500 px-2"> </i>
                </a>
            </p>
            <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light pb-5">{{ t(project.category)
            }}</span>
            <br v-if="project.projectInfo.companyInfos[2].details != '#'" /><br
                v-if="project.projectInfo.companyInfos[2].details != '#'" />

            <!-- <br v-if="project.outer_link != '#'" /><br
                v-if="project.outer_link != '#'"
            />

            <a
                class="text-lg text-center text-link d-flex"
                v-if="project.outer_link != '#'"
                :href="project.outer_link" target="_blank"
            >

                <i
                    data-feather="external-link"
                    id="my-link"
                    class=""
                    stroke-width="3"
                ></i>
            </a> -->
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
