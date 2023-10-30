<script setup lang="ts">
import { ref, watch, computed, onBeforeMount } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import { useEcomStore } from '@/stores/apps/eCommerce';
import LanguageDD from './LanguageDD.vue';
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import Searchbar from './Searchbar.vue';
import { Icon } from '@iconify/vue';
import RightMobileSidebar from './RightMobileSidebar.vue';
import Logo from '../logo/Logo.vue';

/*Tailwind config*/
/**/
const customizer = useCustomizerStore();
const showSearch = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
  showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
  priority.value = newPriority;
});

// count items
const store = useEcomStore();
const getCart = computed(() => {
  return store.cart;
});

//For on Scroll Effect on Header
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

const stickyHeader = ref(false)
function handleScroll() {
  if (window.pageYOffset) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}


</script>

<template>
  
    <div class="mb-2">
      <header  id="top" class="app-header py-3 px-6  bg-surface top-0 z-20 w-full rounded-large shadow"
        :class="stickyHeader ? 'sticky' : ''">
        <div class="flex-no-wrap relative flex w-full items-center justify-between lg:flex-wrap">
          <div class="flex flex-wrap items-center">

            <button type="button" class="lg:block hidden" data-hs-overlay="#hs-overlay-body-scrolling" @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)">
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
