<script>
import { useI18n } from "vue-i18n";
import { mapActions } from "vuex";
export default {
    components: {},
    props: ["project"],
    setup() {
        const { t } = useI18n({
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
    <div>
        <div>
            <router-link
                :to="{ name: project.link }"
                :project="project.title"
                @click="setPageId(project.id)"
                class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
                aria-label="Single Project"
            >
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
            </router-link>
        </div>
        <div class="text-center px-4 py-6 d-flex justify-content-center align-items-center">
            <p
                class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
                <!-- {{ project.title }} -->
                {{ t(project.title) }}
            </p>
            <span
                class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light pb-5"
                >{{ t(project.category) }}</span
            >
            <br v-if="project.outer_link != '#'" /><br
                v-if="project.outer_link != '#'"
            />

            <a
                class="text-lg text-center text-link d-flex"
                v-if="project.outer_link != '#'"
                :href="project.outer_link" target="_blank"
            >
                <!-- {{ t("Check it") }} -->

                <i
                    data-feather="external-link"
                    id="my-link"
                    class=""
                    stroke-width="3"
                ></i>
            </a>
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
