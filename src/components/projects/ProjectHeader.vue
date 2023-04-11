<script>
export default {
    props: ["singleProjectHeader", "img"],
};
</script>

<template>
    <div>
        <!-- Project heading and meta info -->
        <p
            class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
            {{ singleProjectHeader.singleProjectTitle }}
        </p>
        <div class="flex">
            <!-- <div class="flex-initial pt-4"> -->
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
            <!-- </div> -->
            <div class="flex items-center flex-image">
                <img :src="img" :alt="img" class="border-none" />
            </div>
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
