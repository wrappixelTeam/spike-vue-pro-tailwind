<script setup lang="ts">
import { RouterView } from 'vue-router';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import HorizontalHeader from './horizontal-header/HorizontalHeader.vue';
import HorizontalSidebar from './horizontal-sidebar/HorizontalSidebar.vue';
import Customizer from './customizer/Customizer.vue';
import { useCustomizerStore } from '@/stores/customizer';
// import { pl, zhHans } from 'vuetify/locale'
const customizer = useCustomizerStore();
</script>

<template>
    <!-----LTR LAYOUT------->
    <div class="bg-background v-theme--BLUE_THEME" :theme="customizer.actTheme" :class="[
        'v-theme--' + customizer.actTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : '',
        customizer.setBorderCard ? 'cardBordered' : '',
    ]">
        <VerticalSidebarVue class="lg:block hidden" v-if="!customizer.setHorizontalLayout" />
        <Customizer />
        <HorizontalHeader v-if="customizer.setHorizontalLayout" />
        <HorizontalSidebar v-if="customizer.setHorizontalLayout" />
        <main class="main_wrap bg-background">
            <VerticalHeaderVue :class="customizer.boxed ? 'maxWidth' : 'px-5'" v-if="!customizer.setHorizontalLayout" />
            <div class="hr-layout mt-2">
                <div class="page-wrapper bg-background pa-0 min-h-screen pt-4 pb-2">
                    <div :class="customizer.boxed ? 'maxWidth' : 'px-5'">
                        <RouterView />
                        <button type="button"
                            class="bg-primary h-14 w-14 rounded-full fixed bottom-8 right-8 flex justify-center items-center p-0"
                            data-hs-overlay="#hs-overlay-right">
                            <SettingsIcon  class="text-white"/>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>  
</template>
