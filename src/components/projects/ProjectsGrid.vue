<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

import { useI18n } from "vue-i18n";
export default {
    components: { ProjectSingle, ProjectsFilter },
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });

        return { t };
    },
    props: ["full"],
    data: () => {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "local",
        });
        return {
            projects,
            projectsHeading: t("Projects Portfolio"),
            selectedCategory: "",
            searchProject: "",
        };
    },

    computed: {
        // Get the filtered projects
        filteredProjects() {
            if (this.selectedCategory) {
                return this.filterProjectsByCategory();
            } else if (this.searchProject) {
                return this.filterProjectsBySearch();
            }
            return this.projects;
        },
        getShortList() {
            return this.filteredProjects.slice(1, 10);
        },
    },
    methods: {
        // Filter projects by category
        filterProjectsByCategory() {
            return this.projects.filter((item) => {
                let category =
                    item.category.charAt(0).toUpperCase() +
                    item.category.slice(1);
                return category.includes(this.selectedCategory);
            });
        },
        // Filter projects by title search
        filterProjectsBySearch() {
            let project = new RegExp(this.searchProject, "i");
            return this.projects.filter((el) => el.title.match(project));
        },
        getProjectsList(i,n) {
            return this.filteredProjects.slice(i, n);
        },
    },
    mounted() {
        feather.replace();
    },
};
</script>

<template>
    <!-- Projects grid -->
    <section class="pt-10 sm:pt-14">
        <!-- Projects grid title -->
        <div class="text-center">
            <p
                class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
            >
                {{ projectsHeading }}
            </p>
        </div>

        <!-- Filter and search projects -->
        <div class="mt-10 sm:mt-10">
            <h3
                class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
            >
                {{ t("Search projects by title or filter by category") }}
            </h3>
            <div
                class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
            >
                <div class="flex justify-between gap-2">
                    <span
                        class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
                    >
                        <i
                            data-feather="search"
                            class="text-ternary-dark dark:text-ternary-light"
                        ></i>
                    </span>
                    <input
                        v-model="searchProject"
                        class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                        id="name"
                        name="name"
                        type="search"
                        required=""
                        :placeholder="
                            $t('Search projects by title or filter by category')
                        "
                        aria-label="Name"
                    />
                </div>
                <ProjectsFilter @filter="selectedCategory = $event" />
            </div>
        </div>
        <!-- Projects grid -->
        <div
            v-if="full"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
        >
            <ProjectSingle
                v-for="project in filteredProjects"
                :key="project.id"
                :project="project"
            />
        </div>
        <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10"
        >
            <ProjectSingle
                v-for="project in getProjectsList(3,7)"
                :key="project.id"
                :project="project"
            />
        </div>
    </section>
</template>
