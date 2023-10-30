<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import { useEcomStore } from '@/stores/apps/eCommerce';
import Logo from '../logo/Logo.vue';
import { Icon } from '@iconify/vue';
// dropdown imports
import LanguageDD from '../vertical-header/LanguageDD.vue';
import NotificationDD from '../vertical-header/NotificationDD.vue';
import ProfileDD from '../vertical-header/ProfileDD.vue';
import Searchbar from '../vertical-header/Searchbar.vue';

const customizer = useCustomizerStore();
const showSearch = ref(false);
const drawer = ref(false);
const appsdrawer = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
    showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
    // yes, console.log() is a side effect
    priority.value = newPriority;
});

// count items
const store = useEcomStore();
const getCart = computed(() => {
    return store.cart;
});

</script>

<template>
    <div class="bg-surface">
        <header :class="customizer.boxed ? 'maxWidth' : 'px-6'" class="horizontal-header  app-header py-3 bg-surface top-0 z-20 w-full">
            <div class="flex-no-wrap relative flex w-full items-center justify-between lg:flex-wrap">
                <div class="flex flex-wrap items-center">
                    <div class="hidden lg:block">
                        <Logo />
                    </div>
                    <button type="button" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation" class="visible lg:invisible" 
                    >
                        <Icon icon="solar:list-bold-duotone" class="text-grey100" height="24" width="24" />
                    </button>
                </div>
                <div class="flex flex-wrap items-center">
                    <!---Search Dropdown--->
                    <div class="mr-sm-6 mr-6">
                        <Searchbar />
                    </div>
                    <!---Language Dropdown--->
                    <div class="mr-sm-6 mr-6">
                        <LanguageDD />
                    </div>
                    <!---Shoppig cart--->
                    <div class="">
                        <RouterLink
                            class="rounded-full h-10 w-10 flex justify-center items-center  focus:outline-none mr-sm-6 mr-6 relative "
                            to="/ecommerce/checkout">
                            <Icon icon="solar:cart-3-line-duotone" class="text-grey100" height="24" width="24" />
                            <div
                                class="absolute inline-flex items-center justify-center w-4 h-4 text-white text-[11px] font-medium  bg-primary rounded-full -top-[2px] -right-0">
                                {{ getCart?.length }}</div>
                        </RouterLink>
                    </div>
                    <!---Notifications--->
                    <div class="mr-sm-6 mr-6">
                        <NotificationDD />
                    </div>
                    <!---User Profile--->
                    <div class="">
                        <ProfileDD />
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
