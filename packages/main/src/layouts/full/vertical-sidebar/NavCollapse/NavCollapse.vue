<script setup>
import { ChevronDownIcon, ChevronUpIcon } from "vue-tabler-icons";
import DropDown from "../DropDown/index.vue";
import { Icon } from '@iconify/vue';
const props = defineProps({ item: Object, level: Number });
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!---Item Childern -->
    <!-- ---------------------------------------------- -->
    <div class="mb-3">
        <div no-action class="hs-accordion" id="sidebar-accordion">
            <!-- ---------------------------------------------- -->
            <!---Dropdown  -->
            <!-- ---------------------------------------------- -->
            
            <div  v-bind="props" :value="item.title"
                :class="'flex cursor-pointer relative items-center text-grey200 sidebar-link bg-hover-' + item.BgColor"
                :active-color="item.chipBgColor" class="cursor-pointer hs-accordion-toggle dark:hs-accordion-active:text-white"
                href="javascript:;">
                <!---Icon  -->
              
                    <div :class="'navbox  bg-hover-' + item.BgColor" :color="item.BgColor" >
                            <span class="icon-box" v-if="level > 0">
                                <div class="sublink-dot" width="30"></div>
                            </span>
                            <span class="icon-box" v-else>
                                <Icon :icon="'solar:' + item.icon" height="24" width="24" :level="level" :class="'position-relative z-[2] texthover-' + item.BgColor" />
                            </span>
                        </div>
               
                <!---Title  -->
                <div :class="'text-sm z-[2] font-medium nav-title-'+ item.BgColor ">{{ $t(item.title) }}</div>
                <!---If Caption-->
                <div v-if="item.subCaption" class="text-xs mt-n1 hide-menu">
                    {{ item.subCaption }}
                </div>
                <ChevronDownIcon size="20"
                    class="hs-accordion-active:hidden ml-auto block z-10 relative mr-4  text-grey100" />
                <ChevronUpIcon size="20" :class="'hs-accordion-active:block ml-auto hidden z-10 relative mr-4 nav-title-'+ item.BgColor " />
            </div>
            <!-- ---------------------------------------------- -->
            <!---Sub Item-->
            <!-- ---------------------------------------------- -->
            <div id="sidebar-accordion"
                class="mb-2 sublinks hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden mt-3">
                <template v-for="(subitem, i) in item.children" :key="i" v-if="item.children">
                    <NavCollapse :item="subitem" v-if="subitem.children" :level="level + 1" />
                    <DropDown :item="subitem" :level="level + 1" v-else></DropDown>
                </template>
            </div>
        </div>
    </div>
    <!-- ---------------------------------------------- -->
    <!---End Item Sub Header -->
    <!-- ---------------------------------------------- -->
</template>
