<script setup>
import feather from "feather-icons";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
// import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";

import relatedProject from "@/data/relatedProjects";
import projects from "@/data/projects";

// import { blog } from "@/data/projectInfos";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { computed, onMounted, onUpdated, ref } from "vue";

const { t } = useI18n({
    inheritLocale: true,
    useScope: "global",
});

const id = 0;

const singleProjectHeader = ref(projects[id].singleProjectHeader);
const projectImages = ref(projects[id].projectImages);
const projectInfo = ref(projects[id].projectInfo);
const img = ref(projects[id].img);
const relatedProjectRef = ref(relatedProject);

const store = useStore();
const pageid = computed(() => store.state.pageid);

const ImgMethod = computed(() => projects[pageid.value].img);
const singleProjectHeaderMethod = computed(() => projects[pageid.value].singleProjectHeader);
const projectImagesMethod = computed(() => projects[pageid.value].projectImages);
const projectInfoMethod = computed(() => projects[pageid.value].projectInfo);
const smallImagesMethod = computed(() => projects[pageid.value].smallImages);

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
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
