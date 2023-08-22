<script>
import i18n from '../../i18n';

import settings from "../../data/settings";
const { t } = i18n.global;

export default {
    name: "Home",
    setup() {
        return {
            settings,
            bios: [
                {
                    id: 1,
                    bio:  t('AboutMe1') ,
                    },
                {
                    id: 2,
					bio:  t('AboutMe2') ,
                    },
                {
                    id: 3,
					bio:  t('AboutMe3') ,
                    },
                {
                    id: 4,
					bio:  t('AboutMe4') ,
                    },
                {
                    id: 5,
					bio:  t('AboutMe5') ,
                    },
            ],
        };
    },
};
</script>

<template>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img :src="settings.profile_photo" class="rounded-xl w-96" alt="" />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 text-left">
            <p
                v-for="bio in bios"
                :key="bio.id"
                class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            >
                {{ bio.bio }}
            </p>
        </div>
    </div>
</template>
