<script>
import { useI18n } from "vue-i18n";
import { mapActions } from "vuex";
export default {
    props: ["relatedProject"],
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });

        return { t };
    },
    computed: {
        randomItems() {
            // Shuffle the items array using Fisher-Yates shuffle algorithm
            const shuffled = this.relatedProject.relatedProjects.slice(0);
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            // Take the first 4 items from the shuffled array
            return shuffled.slice(0, 4);
        },
    },
    methods: {
        ...mapActions(["setPageId"]),
    },
};
</script>

<template>
    <div class="border-primary-light dark:border-secondary-dark">
        <p
            class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
        >
            {{ relatedProject.relatedProjectsHeading }}
        </p>

            <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12">
            <!-- <div class="grid grid-cols-1 mt-6 sm:gap-10"> -->
            <div v-for="item in randomItems" :key="item.id">
                <router-link
                    :to="{ name: item.link }"
                    @click="setPageId(item.id)"
                >
                    <img
                        v-lazy="item.img"
                        class="rounded-xl cursor-pointer h-70 w-96"
                        :alt="item.title"
                /></router-link>
                <h3 class="dark:text-white text-center pt-2">
                    {{ item.title }}
                </h3>
            </div>
        </div>
    </div>
</template>
