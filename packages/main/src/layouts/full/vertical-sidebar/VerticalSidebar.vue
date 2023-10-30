<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import sidebarItems from './sidebarItem';
import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import ExtraBox from './extrabox/ExtraBox.vue';
import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';
import Logo from '../logo/Logo.vue';
import { useAuthStore } from '@/stores/auth';


const activeClass = ref(
  'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
)
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
)

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
const authStore = useAuthStore();
</script>

<template>
  <div class="flex ">
    <div class="">
      <div id="hs-overlay-body-scrolling" 
        class="[--body-scroll:true] [--overlay-backdrop:false] leftSidebar fixed left-0 top-0 z-10 h-screen overflow-hidden lg:mt-5 lg:ml-5 bg-containerBg shadow">
        <div class="py-5 px-4">
          <Logo />
        </div>
        <perfect-scrollbar class="scrollnavbar bg-containerBg overflow-y-hidden">
          <div class="flex-1">
            <ul class="hs-accordion-group p-4 w-full flex flex-col flex-wrap pt-0" data-hs-accordion-always-open>
              <template v-for="(item, i) in sidebarMenu">
                <!---Item Sub Header -->
                <NavGroup :item="item" v-if="item.header" :key="item.title" />
                <!---If Has Child -->
                <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
                <!---Single Item-->
                <NavItem :item="item" v-else class="leftPadding" />
                <!---End Single Item-->
              </template>
            </ul>
          </div>
        </perfect-scrollbar>
        <div class="pa-6 px-4 userbottom mt-8">
          <ExtraBox />
        </div>
      </div>
    </div>
  </div>
 
</template>
