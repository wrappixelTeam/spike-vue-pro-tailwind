<script setup>
import { ref } from 'vue';
import { SearchIcon } from 'vue-tabler-icons';
import { searchSugg } from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
const searchOpen = ref(false);
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- search -->
    <!-- ------------------------------------------------>
    <div class="relative">
        <div class="relative">
            <input type="text" id="hs-leading-icon" name="hs-leading-icon"
                class="py-[10px] w-[230px] px-4 pl-12 block  border border-borderColor bg-transparent rounded-full text-sm"
                placeholder="Try to searching ..."   @click="searchOpen = !searchOpen">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-5">
                <Icon icon="solar:magnifer-linear" class="text-textSecondary" height="22" width="22" />
            </div>
        </div>

        <div v-show="searchOpen" class="fixed inset-0 z-10 w-full h-full" @click="searchOpen = false" />
        <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
            <div v-show="searchOpen" class="absolute z-50 mt-5 bg-containerBg w-[360px] rounded-md shadow-xl">
                <div>
                    <h5 class="py-4 px-4 text-lg font-semibold">Quick Page Links</h5>
                    <perfect-scrollbar style="height: 380px">
                        <div class="px-4 pb-5">
                            <div class="pt-0 pb-5" lines="two">
                                <RouterLink :value="item" v-for="(item, index) in searchSugg" :key="index" :to="item.href"
                                    active-color="primary">
                                    <div class="mb-3">
                                        <h6 class="text-sm font-medium mb-1">{{ item.title }}</h6>
                                        <p class="text-xs text-grey100">{{ item.href }}</p>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>
            </div>
        </transition>
</div></template>
