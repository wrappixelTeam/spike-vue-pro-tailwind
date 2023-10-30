<script setup>
import { CircleIcon } from 'vue-tabler-icons';
import Icon from '../Icon.vue';
const props = defineProps({ item: Object, level: Number });
</script>

<template>

    <div class="mb-0">
    <!---Single Item-->
    <RouterLink
        :to="item.to"
        rounded="lg"
        class="flex relative sidebar-link text-grey200 items-center"
        active-color=""
      
        :target="item.type === 'external' ? '_blank' : ''"
        v-scroll-to="{ el: '#top' }"
    >
        <!---If icon-->
        <div >
           <div class="sublink-dot ml-4"></div>
        </div>
        <div class="ml-7 text-sm">{{ $t(item.title) }}</div>
        <!---If Caption-->
        <div v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
            {{ item.subCaption }}
        </div>
        
        <!---If any chip or label-->
        <div v-if="item.chip">
            <span  :class="'bg-'+ item.chipBgColor" class="border border-gray-700  sidebarchip hide-menu items-center h-5 w-5 flex justify-center rounded-full text-xs text-white mr-4">{{ item.chip }}</span>
        </div>
    </RouterLink>

</div>
</template>
