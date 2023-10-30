<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { PointFilledIcon } from 'vue-tabler-icons';
const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="mt-3 mb-6">
        <div class="flex bg-surface rounded-large p-6 justify-between">
            <h3 class="text-xl font-semibold">{{ title }}</h3>
            <ol class="flex items-center" aria-label="Breadcrumb">
                <li>
                    <RouterLink to="/" class="text-sm flex text-textSecondary items-center">
                        Home
                        <PointFilledIcon size="10" class="mx-3 " />
                    </RouterLink>
                </li>
                <li>
                    <h6 class="opacity-50 text-sm">{{ title }}</h6>
                </li>
            </ol>
        </div>
    </div>
</template>

<style lang="scss">
.page-breadcrumb {
    .v-toolbar {
        background: transparent;
    }
}
</style>
