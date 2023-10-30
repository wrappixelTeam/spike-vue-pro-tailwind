<script setup>
// import Icond from '../Icon.vue';
import { Icon } from '@iconify/vue';
const props = defineProps({ item: Object, level: Number });
</script>

<template>
    <!---Single Item-->
    <div class="mb-1">
        <RouterLink :to="item.type === 'external' ? '' : item.to" :href="item.type === 'external' ? item.to : ''" rounded
        :class="'flex relative sidebar-link items-center text-grey200 bg-hover-' + item.BgColor" :color="item.BgColor" v-scroll-to="{ el: '#top' }">
        
            <!---If icon-->
            <span>
                <div :class="'navbox  bg-hover-' + item.BgColor" :active-color="item.BgColor">
                    <span class="icon-box">
                        <Icon :icon="'solar:' + item.icon" height="24" width="24" :level="level" :class="'position-relative z-[2] texthover-' + item.BgColor" />
                    </span>
                </div>
            </span>
            <div class="z-10 me-auto">
                <div :class="'text-sm nav-title font-medium nav-title-'+ item.BgColor " >{{ $t(item.title) }}</div>
                <div v-if="item.subCaption" class="text-xs mt-n1 hide-menu">
                    {{ item.subCaption }}
                </div>
            </div>
            <!---If Caption-->

            <!---If any chip or label-->
            <div class="z-10" v-if="item.chip">
                <div v-if="item.chipVariant">
                    <span :class="'text-' + item.chipColor"
                        class="outline outline-1 sidebarchip hide-menu items-center flex justify-center rounded-full text-xs mr-4 py-0.5 px-2">{{
                            item.chip }}</span>
                </div>
                <div v-else>
                    <span :class="'bg-' + item.chipColor"
                        class="sidebarchip hide-menu items-center h-5 w-5 flex justify-center rounded-full text-xs text-white mr-4">{{
                            item.chip }}</span>
                </div>
            </div>
        </RouterLink>
</div></template>
