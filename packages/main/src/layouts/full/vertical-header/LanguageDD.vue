<script setup lang="ts">
import { ref } from 'vue';
import { languageDD } from '@/_mockApis/headerData';
import flag1 from '@/assets/images/flag/icon-flag-en.svg';
import flag2 from '@/assets/images/flag/icon-flag-ro.svg';
import flag3 from '@/assets/images/flag/icon-flag-zh.svg';
import flag4 from '@/assets/images/flag/icon-flag-fr.svg';
const Langdd = ref(false);
const activeClass = ref(
  'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
)
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
)
</script>
<template>
    <!-- ---------------------------------------------- -->
    <!-- language DD -->
    <!-- ---------------------------------------------- -->

    <div class="relative">
        <button class="rounded-full h-10 w-10 p-0 flex justify-center items-center focus:outline-none"
            @click="Langdd = !Langdd">
            <img v-if="$i18n.locale === 'en'" :src="flag1" :alt="$i18n.locale" class="object-cover h-6 w-6 rounded-full" />
            <img v-if="$i18n.locale === 'fr'" :src="flag4" :alt="$i18n.locale" class="object-cover h-6 w-6 rounded-full" />
            <img v-if="$i18n.locale === 'ro'" :src="flag2" :alt="$i18n.locale" class="object-cover h-6 w-6 rounded-full" />
            <img v-if="$i18n.locale === 'zh'" :src="flag3" :alt="$i18n.locale" class="object-cover h-6 w-6 rounded-full" />
        </button>
        <div v-show="Langdd" class="fixed inset-0 z-10 w-full h-full" @click="Langdd = false" />
        <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
            <div v-show="Langdd" class="absolute right-0 z-50 py-2 mt-2 bg-containerBg w-48 rounded-md shadow-xl">
                <div class="p-3">
                    <ul class="">
                        <li v-for="(item, index) in languageDD" :key="index"  
                            :active="$i18n.locale == item.value" class="flex items-center py-2 gap-3 cursor-pointer"
                            @click="() => ($i18n.locale = item.value)">
                            <img :src="item.avatar" :alt="item.avatar"  class="object-cover h-6 w-6 rounded-full" />
                            <div class="flex items-center">
                                <span class="text-sm mr-2">{{ item.title }}</span>
                                <span class="text-sm text-grey100">({{ item.subtext }})</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>
