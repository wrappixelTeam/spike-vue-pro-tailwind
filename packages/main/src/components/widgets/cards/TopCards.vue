<script setup lang="ts">
import { textCardsData } from '@/_mockApis/components/dashboards/dashboard2';
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="grid grid-cols-12 w-full gap-6">
        <div v-for="item in textCardsData" :key="item.title" class="xl:col-span-3 col-span-12 flex items-stretch">
            <div class="card-no-bg relative bg-primary w-full" >
                <div class="py-7 pl-4">
                    <img :src="item.shape" alt="shape" class="absolute right-0 top-0">
                    <Icon :icon="'solar:' + item.icon" width="30" height="30"   class="mb-6"/>
                    <h5 class="text-xl font-semibold mb-2 text-white">{{ item.num }}<span class="text-xs font-medium pl-1">{{ item.percent }}</span></h5>
                    <p  class="text-sm opacity-50 font-medium">{{ item.title }}</p>
                </div>
                
            </div>
        </div>
    </div>
</template>
