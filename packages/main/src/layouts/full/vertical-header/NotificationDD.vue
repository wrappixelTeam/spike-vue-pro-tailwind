<script setup lang="ts">
import { ref } from 'vue';
import { notifications } from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
const notificationOpen = ref(false);
</script>
<template>
    <!-- ---------------------------------------------- -->
    <!-- notifications DD -->
    <!-- ---------------------------------------------- -->

    <div class="relative">
        <button class="rounded-full p-0 h-10 w-10 flex justify-center items-center focus:outline-none"
            @click="notificationOpen = !notificationOpen">
            <div class="realtive">
                <div class="notify realtive">
                    <span class="heartbit"></span> <span class="point"></span>
                </div>
                <Icon icon="solar:bell-bing-line-duotone" class="text-grey100" height="24" width="24" />
            </div>
        </button>
        <div v-show="notificationOpen" class="fixed inset-0 z-10 w-full h-full" @click="notificationOpen = false" />
        <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
            <div v-show="notificationOpen" class="absolute right-0 z-50 mt-5 bg-containerBg w-96 rounded-md shadow">
                <div class="px-8 pb-4 pt-6">
                    <div class="flex items-center">
                        <h6 class="text-lg font-semibold">Notifications</h6>
                        <span class="py-1 px-2 rounded-full text-xs font-medium bg-primary text-white ml-3">5 New</span>
                    </div>
                </div>
                <perfect-scrollbar style="height:300px">
                    <ul class="py-0 theme-list" lines="two">
                        <li v-for="item in notifications" :key="item.title" :value="item">
                            <RouterLink to="/" class="flex items-center py-4 px-8 hover:bg-[#f5f8fb]">
                                <img :src="item.avatar" width="48" height="48" :alt="item.avatar"
                                    class="object-cover rounded-full mr-3" />
                                <div>
                                    <h6 class="text-base font-medium">{{ item.title }}</h6>
                                    <p class="text-grey100 text-sm font-medium">{{ item.subtitle }}</p>
                                </div>
                            </RouterLink>
                        </li>
                        <v-divider></v-divider>
                    </ul>
                </perfect-scrollbar>
                <div class="py-4 px-6 text-center">
                    <button
                        class="bg-primary w-full rounded-full h-11 justify-center items-center font-semibold  text-white focus:outline-none shadow ">See
                        all Notifications</button>
                </div>
            </div>
        </transition>
    </div>
</template>
