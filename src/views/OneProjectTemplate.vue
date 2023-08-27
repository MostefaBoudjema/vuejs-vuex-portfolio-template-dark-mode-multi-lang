<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
// import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";

import relatedProject from "../data/relatedProjects";
import projects from "../data/projects";

// import { blog } from "../../data/projectInfos";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { mapState } from "vuex";
export default defineComponent({
    name: "Blog",
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });
        return { t };
    },
    components: {
        ProjectHeader,
        // ProjectGallery,
        ProjectInfo,
        ProjectRelatedProjects,
    },
    data: () => {
        let id = 0;
        return {
            singleProjectHeader: projects[id].singleProjectHeader,
            projectImages: projects[id].projectImages,
            projectInfo: projects[id].projectInfo,
            img: projects[id].img,
            relatedProject,
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
    computed: {
        ...mapState(["pageid"]),

        ImgMethod() {
            return projects[this.pageid].img;
        },
        singleProjectHeaderMethod() {
            return projects[this.pageid].singleProjectHeader;
        },
        projectImagesMethod() {
            return projects[this.pageid].projectImages;
        },
        projectInfoMethod() {
            return projects[this.pageid].projectInfo;
        },
        smallImagesMethod() {
            return projects[this.pageid].smallImages;
        },
    },
    methods: {},
});
</script>

<template>
    <div class="container mx-auto sm:mt-20 flex-wrap">
        <!-- Project header -->
        <ProjectHeader
            :singleProjectHeader="singleProjectHeaderMethod"
            :imgList="projectImagesMethod"
        />
        <!-- Project information -->
        <ProjectInfo :projectInfo="projectInfoMethod" :smallImages="smallImagesMethod"/>
        <div class="block sm:flex gap-0 sm:gap-10 mt-14">
            <!-- Project related projects -->
            <ProjectRelatedProjects :relatedProject="relatedProject" />

        </div>
    </div>
</template>

<style scoped></style>
