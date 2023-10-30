<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="bg-lightprimary p-4 rounded-sm">
        <div class="flex items-center justify-between">
            <img src="@/assets/images/profile/user6.jpg" class="rounded-full" width="50" alt="Mike Nielsen" />
            <div>
                <h6 class="text-base flex items-center font-semibold">Mike Nielsen</h6>
                <span class="text-xs font-medium text-grey100">Admin</span>
            </div>
            <div>
                <button icon class="bg-lightprimary p-0" flat  size="small">
                    <Icon icon="solar:logout-linear" class="text-primary" stroke-width="3" height="24" width="24" />
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.ExtraBox {
    position: relative;
}

.line-height-none {
    line-height: normal;
}
</style>



