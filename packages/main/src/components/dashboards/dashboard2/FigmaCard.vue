<script setup lang="ts">
import { profileImgData } from '@/_mockApis/components/dashboards/dashboard2';
</script>
<template>
    <div class="card overflow-hidden">
        <div class="card-body w-100 bg-lighterror">
            <div class="w-full flex justify-center py-2">
                <img height="130" src="@/assets/images/backgrounds/gifts.png" />
            </div>
        </div>
        <div class="card-body">
            <RouterLink to="/" class="text-base font-semibold text-decoration-none text-textSecondary">Figma Tips and Tricks with
                Stephan</RouterLink>
            <div class="text-sm text-grey100 mt-2 mb-5">Checkout latest events going to happen in USA.</div>
            <div class="flex items-center pb-1">
                <div v-for="item in profileImgData" :key="item.img" size="32" class="mr-1">
                    <img :src="item.img" alt="profile" class="rounded-full" height="32" width="32">
                </div>
                <p class="text-sm text-grey100 ml-2">+18</p>
            </div>
        </div>
    </div>
</template>