<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="card">
        <div class="card-body relative pb-0 h-full overflow-hidden">
            <h5 class="text-xl mb-1 font-semibold">
                Congratulations Jonathan
            </h5>
            <div class="text-sm text-grey100 pb-1 font-medium -mt-1">You have done 38% more sales</div>
            <div class="mt-6  sm:flex block">
                <ul class="list-unstyled mb-0">
                    <li class="flex items-center mb-5">
                        <div class="bg-lightsuccess me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:cart-3-line-duotone" height="24" width="24" class="text-success"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">64 new orders</h6>
                            <p class="text-sm text-grey100  font-medium">Processing</p>
                        </div>
                    </li>
                    <li class="flex items-center mb-5">
                        <div class="bg-lightwarning me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:pause-linear" height="24" width="24" class="text-warning"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">4 orders</h6>
                            <p class="text-sm text-grey100  font-medium">On hold</p>
                        </div>
                    </li>
                    <li class="flex items-center mb-5">
                        <div class="bg-lightinfo me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:delivery-linear" height="24" width="24" class="text-info"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">12 orders</h6>
                            <p class="text-sm text-grey100  font-medium">Delivered</p>
                        </div>
                    </li>
                    <li class="flex items-center mb-5">
                        <div class="bg-lightwarning me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:pause-linear" height="24" width="24" class="text-warning"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">4 orders</h6>
                            <p class="text-sm text-grey100  font-medium">On hold</p>
                        </div>
                    </li>
                </ul>
                <div class="man-working-on-laptop absolute right-0 bottom-0">
                    <img src="@/assets/images/backgrounds/man-working-on-laptop.png" class="w-100" alt="">
                </div>
            </div>


        </div>
    </div>
   
</template>