<script setup lang="ts">
import { ref } from 'vue';
import { profileImages } from '@/_mockApis/components/dashboards/dashboard1';
</script>
<template>
    <div class="card">
        <div class="card-body relative">
            <div class="flex justify-between d-block">
                <div>
                    <h5 class="text-lg font-semibold">
                        Latest Deal
                    </h5>
                    <div class="text-sm text-grey100 pb-1 font-medium">Last 7 days</div>
                </div>
                <div class="mt-1 text-right">
                    <span
                        class="outline outline-1 outline-success sidebarchip hide-menu items-center flex justify-center rounded-full text-xs  py-0.5 px-2 bg-lightsuccess text-success">86.5%</span>
                </div>
            </div>
            <div class=" sm:my-12 my-8">
                <div class="flex items-center justify-between mb-2">
                    <h5 class="text-base font-semibold">$98,500</h5>
                    <h6 class="text-sm font-semibold">$1,22,900</h6>
                </div>

                <div class="progress bg-lightsecondary my-2">
                    <div class="progress-bar h-full rounded bg-primary" style="width: 80%"></div>
                </div>

                <div class="flex w-full h-1.5 bg-lightsecondary rounded-full overflow-hidden">
                    <div class="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar"
                        style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="text-sm text-grey100 mt-2 font-medium">Coupons used: 18/22</p>
            </div>
            <div class="pb-md-2">
                <h6 class="text-sm font-semibold mb-4">Recent Purchasers</h6>
                <div class="flex -space-x-1">
                    <span v-for="item in profileImages" :key="item.img" size="40" class="ms-n2 avatar-border">
                        <img :src="item.img" alt="profile"
                            class="inline-block h-10 w-10 rounded-full ring-2 ring-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 duration-500">
                    </span>
                    <span  class="text-sm font-semibold h-10 w-10 rounded-full ring-2 ring-white flex items-center justify-center bg-lightprimary text-primary">
                       +8
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

