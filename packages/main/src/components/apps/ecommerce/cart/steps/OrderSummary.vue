<script setup lang="ts">
import { computed, onMounted, onUpdated, reactive, ref } from 'vue';
import { useEcomStore } from '@/stores/apps/eCommerce';

const store = useEcomStore();
onMounted(() => {
    store.getsubTotal();
    store.getTotal();
    store.getDiscount();
});

// const getSubtotal = computed(() => {
//     return store.subTotal;
// });
// const Subtotal = ref(getSubtotal);
// const Discount = reactive(Math.round(Subtotal.value * (5 / 100)));
// const total = reactive(getSubtotal.value - Discount);
</script>
<template>
    <v-card variant="outlined" class="my-3">
        <v-card-item>
            <h5 class="text-lg mb-6">Order Summery</h5>

            <div class="flex items-center justify-between my-5">
                <h6 class="text-base font-weight-regular">Sub Total</h6>
                <h6 class="font-semibold text-base">${{ store.subTotal }}</h6>
            </div>

            <div class="flex items-center justify-between my-5">
                <h6 class="text-base font-weight-regular">Discount 5%</h6>
                <h6 class="font-semibold text-base text-error">- ${{ store.discount }}</h6>
            </div>

            <div class="flex items-center justify-between my-5">
                <h6 class="text-base font-weight-regular">Shipping Charges</h6>
                <h6 class="font-semibold text-base">-</h6>
            </div>

            <div class="flex items-center justify-between my-5">
                <h6 class="text-base">Total</h6>
                <h6 class="font-semibold text-lg">${{ store.total }}</h6>
            </div>
        </v-card-item>
    </v-card>
</template>
