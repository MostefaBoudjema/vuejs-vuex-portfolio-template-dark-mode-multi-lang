<script>
import { useI18n } from "vue-i18n";
import { mapActions } from 'vuex';
export default {
    props: ["project"],
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });
        return { t };
    },
    methods: {
        ...mapActions([
            'setPageId'
        ])
    },
};
</script>

<template>
    <router-link
        :to="{ name: project.link}"
        :project="project.title"
        @click="setPageId(project.id)"
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Single Project"
    >
        <div>
            <img
                :src="project.img"
                :alt="project.title"
                class="rounded-t-xl border-none"
            />
            <!-- <img
                :src="project.img"
                :alt="project.title"
                class="rounded-t-xl border-none h-70 w-96"
            /> -->
        </div>
        <div class="text-center px-4 py-6">
            <p
                class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
                <!-- {{ project.title }} -->
                {{ t(project.title) }}
            </p>
            <span
                class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
                >{{ t(project.category) }}</span
            >
        </div>
    </router-link>
</template>

<style lang="scss" scoped></style>
