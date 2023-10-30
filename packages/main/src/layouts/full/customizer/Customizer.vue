<script setup lang="ts">
import { ref } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import {
    CheckIcon,
} from 'vue-tabler-icons';
import { Icon } from '@iconify/vue';


// const theme = useTheme();
const customizer = useCustomizerStore();

// themes color options
const themeColors = ref([
    {
        name: 'BLUE_THEME',
        bg: 'themeBlue'
    },
    {
        name: 'AQUA_THEME',
        bg: 'themeAqua'
    },
    {
        name: 'PURPLE_THEME',
        bg: 'themePurple'
    },
    {
        name: 'GREEN_THEME',
        bg: 'themeGreen'
    },
    {
        name: 'CYAN_THEME',
        bg: 'themeCyan'
    },
    {
        name: 'ORANGE_THEME',
        bg: 'themeOrange'
    }
]);



// Dark Theme Colors
const DarkthemeColors = ref([
    { name: 'DARK_BLUE_THEME', bg: 'themeDarkBlue' },
    { name: 'DARK_AQUA_THEME', bg: 'themeDarkAqua' },
    { name: 'DARK_PURPLE_THEME', bg: 'themeDarkPurple' },
    { name: 'DARK_GREEN_THEME', bg: 'themeDarkGreen' },
    { name: 'DARK_CYAN_THEME', bg: 'themeDarkCyan' },
    { name: 'DARK_ORANGE_THEME', bg: 'themeDarkOrange' }
]);

</script>

<!------------------------------------->
<!-- Customizer -->
<!------------------------------------->
<template>
    <div id="hs-overlay-right"
        class="[--body-scroll:true] [--overlay-backdrop:true] hs-overlay hs-overlay-open:translate-x-0  translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs  w-full z-[60] hidden bg-surface "
        tabindex="-1">
        <div class="p-6 border-b border-borderColor">
            <h5 class="font-semibold text-lg">Settings</h5>
        </div>
        <perfect-scrollbar style="height: calc(100vh - 90px)">
            <div class="p-6">
                <h6 class="font-semibold text-base mb-3">Sidebar Layout</h6>
                <div class="flex gap-3">
                    <button @click="customizer.SET_LAYOUT(false)"
                    :class="customizer.setHorizontalLayout == false ? 'text-primary' : ''" 
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:slider-vertical-minimalistic-linear" height="22" width="22" size="22"
                            class="mr-2" />
                        Vertical
                    </button>
                    <button @click="customizer.SET_LAYOUT(true)"
                        :class="customizer.setHorizontalLayout == true ? 'text-primary' : ''" 
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:slider-minimalistic-horizontal-outline" height="22" width="22" size="22"
                            class="mr-2" /> Horizontal
                    </button>
                </div>

                <!------Theme Direction------>
                <h6 class="font-semibold text-base mb-3 mt-8">Theme Direction</h6>
                <div class="flex gap-3">
                    <button @click="customizer.setRTLLayout(false)"
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:align-left-linear" height="22" width="22" size="22" class="mr-2" /> LTR
                    </button>
                    <button @click="customizer.setRTLLayout(true)"
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:align-right-linear" height="22" width="22" size="22" class="mr-2" /> RTL
                    </button>
                </div>

                <h6 class="font-semibold text-base mb-3 mt-8">Theme Color</h6>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="xl:col-span-4 col-span-4 flex items-stretch pa-2 flex-col"   v-for="theme in themeColors" :key="theme.name" >
                        <div :value="theme.name">
                            <div @click="customizer.SET_THEME(theme.name)"
                            class="rounded-large flex justify-center py-4 px-4 border border-borderColor shadow hover-btns" >
                                <div :class="theme.bg" class="h-6 w-6 rounded-full flex items-center justify-center">
                                    <div v-if= 'customizer.actTheme == theme.name'>
                                        <CheckIcon color="white" size="18"/>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 class="font-semibold text-base mb-3 mt-8">Theme Dark Color</h6>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="xl:col-span-4 col-span-4 flex items-stretch pa-2 flex-col"   v-for="theme in DarkthemeColors" :key="theme.name" >
                        <div :value="theme.name">
                            <div @click="customizer.SET_THEME(theme.name)"
                            class="rounded-large flex justify-center py-4 px-4 border border-borderColor shadow hover-btns" >
                            <div :class="theme.bg" class="h-6 w-6 rounded-full flex items-center justify-center">
                                    <div v-if= 'customizer.actTheme == theme.name'>
                                        <CheckIcon color="white" size="18"/>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 class="font-semibold text-base mb-3 mt-8">Container Option</h6>
                <div class="flex gap-3">
                    <button @click="customizer.SET_BOXED(true)"
                        :class="customizer.boxed == true ? 'text-primary' : ''" 
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:cardholder-linear" height="22" width="22" size="22" class="mr-2" /> Boxed
                    </button>
                    <button @click="customizer.SET_BOXED(false)"
                        :class="customizer.boxed == false ? 'text-primary' : ''" 
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:scanner-linear" height="22" width="22" size="22" class="mr-2" /> Full
                    </button>
                </div>
                <div v-if="customizer.setHorizontalLayout != true">
                    <h6 class="font-semibold text-base mb-3 mt-8">Sidebar Type</h6>
                    <div class="flex gap-3">
                        <button @click="customizer.SET_MINI_SIDEBAR(false)"
                            :class="customizer.mini_sidebar == false ? 'text-primary' : ''" 
                            class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                            <Icon icon="solar:sidebar-minimalistic-outline" height="22" width="22" size="22" class="mr-2" />
                            Full
                        </button>
                        <button @click="customizer.SET_MINI_SIDEBAR(true)"
                            :class="customizer.mini_sidebar == true ? 'text-primary' : ''" 
                            class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                            <Icon icon="solar:siderbar-outline" height="22" width="22" size="22" class="mr-2" />
                            Collapse
                        </button>
                    </div>
                </div>
               <h6 class="font-semibold text-base mb-3 mt-8">Card with</h6> 
                <div class="flex gap-3">
                    <button @click="customizer.SET_CARD_BORDER(false)"
                        :class="customizer.setBorderCard == false ? 'text-primary' : ''" 
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:library-broken" height="22" width="22" size="22" class="mr-2" />
                        Shadow
                    </button>
                    <button @click="customizer.SET_CARD_BORDER(true)"
                         :class="customizer.setBorderCard == true ? 'text-primary' : ''" 
                        class="flex items-center rounded-large p-5 border border-borderColor text-grey200 shadow text-sm">
                        <Icon icon="solar:box-outline" height="22" width="22" size="22" class="mr-2" />
                        Border
                    </button>
                </div>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<style lang="scss"></style>
