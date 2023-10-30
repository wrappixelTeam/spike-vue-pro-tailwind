<script setup lang="ts">
import { ref } from 'vue';
import {  CircleXIcon,  XIcon,MailIcon } from 'vue-tabler-icons';
import { Icon } from '@iconify/vue';
import { profileDD } from '@/_mockApis/headerData';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const profileOpen = ref(false);
</script>

<template>
    <!-------------------------------------------------->
    <!-- notifications DD -->
    <!-------------------------------------------------->
    <div class="relative">
        <a class="flex items-center ease-in-out duration-500 justify-center " @click="profileOpen = !profileOpen" href="#"
            id="dropdownMenuButton1" role="button" data-te-dropdown-toggle-ref="" aria-expanded="false">
            <div class="relative mr-4">
                <img src="@/assets/images/profile/user6.jpg" class="object-cover rounded-full h-12 w-12">
            </div>
            <div>
                <h6 class="font-semibold text-base mb-0 flex items-center">
                    Mike Nielsen
                </h6>
                <p class="text-xs mb-0 text-grey100">
                    Admin
                </p>
            </div>
        </a>
        <div v-show="profileOpen" class="fixed inset-0 z-10 w-full h-full" @click="profileOpen = false" />
        <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
            <div v-show="profileOpen" class="absolute right-0 z-50 mt-5 bg-containerBg w-96 rounded-md shadow">
                <div class="px-8 pt-6">
                    <div class="border-b border-borderColor">
                        <div class="flex items-center justify-between">
                            <h6 class="text-lg font-semibold">User Profile</h6>
                            <CircleXIcon size="22" class="text-grey100 cursor-pointer opacity-50"
                                @click="profileOpen = false" />
                        </div>

                        <div class="flex items-center mt-5 pb-6">
                            <img src="@/assets/images/profile/user6.jpg" class="object-cover rounded-full" width="90" />
                            <div class="ml-5">
                                <h6 class="text-lg mb-n1 font-semibold">Mike Nielsen</h6>
                                <div class="text-sm -mt-1 text-grey100 font-medium">
                                    Admin</div>
                                <div class="flex items-center mt-1">
                                    <MailIcon size="18" class="text-grey100" />
                                    <span class="text-sm text-grey100 font-medium ml-2">info@spikeadmin.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <perfect-scrollbar style="height: calc(100vh - 240px); max-height: 240px">
                    <ul class="py-0 theme-list" lines="two">
                        <li v-for="item in profileDD" :key="item.title"
                            class="py-4 px-8 custom-text-primary">
                            <RouterLink :to="item.href" class="flex items-center">
                                <div>
                                    <div class="mr-5 rounded-lg w-10 h-10 flex items-center justify-center"
                                        :class="'bg-light' + item.bgcolor">
                                        <Icon :icon="'solar:' + item.avatar" width="25" height="25"   :class="'text-' + item.bgcolor"/>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="text-base font-medium mb-1 custom-title">{{ item.title }}</h6>
                                    <p class="text-sm font-regular text-grey100 -mt-1">{{ item.subtitle }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </perfect-scrollbar>
                <div class=" pb-6 px-8 text-center">
                    <button
                        class="bg-primary w-full rounded-full h-11 justify-center items-center font-semibold  text-white focus:outline-none shadow"
                        @click="authStore.logout()">Logout</button>
                </div>
            </div>
        </transition>
    </div>
</template>
