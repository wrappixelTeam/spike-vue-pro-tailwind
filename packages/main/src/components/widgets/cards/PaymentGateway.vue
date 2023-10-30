<script setup lang="ts">
import { paymentGateways } from '@/_mockApis/components/widget/card';
</script>
<template>
    <div class="card">
        <div class="card-body relative overflow-hidden">
            <h5 class="text-lg mb-1 font-semibold">
                Payment Gateways
            </h5>
            <div class="text-sm text-grey100 pb-1 font-medium -mt-1">Platform For Income</div>
            <div class="mt-10">
                <div class="flex items-center mb-7" v-for="list in paymentGateways" :key="list.title">
                    <div :class="'h-10 w-10 rounded-full flex items-center justify-center bg-light' + list.bgcolor" >
                        <img :src="list.img" :alt="list.img" width="25" />
                    </div>
                    <div class="pl-4">
                        <h5 class="text-base font-semibold">{{ list.title }}</h5>
                        <h6 class="text-sm text-grey100">{{ list.subtitle }}</h6>
                    </div>
                    <div :class="'ml-auto font-medium text-sm text-grey100 text-medium-' + list.disable">{{ list.rank }}
                    </div>
                </div>
                <button class="mt-3 rounded-full btn-outline w-full" >View all
                    transactions</button>
            </div>
        </div>
    </div>
</template>
