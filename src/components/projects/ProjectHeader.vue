<script>
import Slide from "@/components/reusable/Slide.vue";
export default {
    components: { Slide },
    props: ["singleProjectHeader", "imgList","video"],
};
// console.log(imgList);
</script>

<template>
    <div>
        <div class="inline-block sm:flex">
            <div>
                <div class="flex justify-center">
                    <p
                        class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-7 sm:mt-7 mb-7"
                    >
                        {{ singleProjectHeader.singleProjectTitle }}
                    </p>
                </div>
                <div class="flex sm:block justify-center">
                    <div class="flex mt-10 mr-10">
                        <i
                            data-feather="clock"
                            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
                        ></i>
                        <span
                            class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
                            >{{ singleProjectHeader.singleProjectDate }}</span
                        >
                    </div>
                    <div class="flex mt-10">
                        <i
                            data-feather="tag"
                            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
                        ></i>
                        <span
                            class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
                            >{{ singleProjectHeader.singleProjectTag }}</span
                        >
                    </div>
                </div>
            </div>

            <slide :video="video" :imgList="imgList" />
        </div>
    </div>
</template>
<style scoped>
img {
    border-radius: 12px;
    width: 30%;
    width: 30%;
}
.flex-image {
    display: flex;
    flex: 1;
    justify-content: space-around;
    /* background-color: blue; */
}
@media (max-width: 768px) {
    .flex-image {
        display: none;
    }
}
</style>
