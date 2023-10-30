<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import HorizontalItems from './horizontalItems';
import NavItem from './NavItem/Index.vue';
import NavCollapse from './NavCollapse/Index.vue';
import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';
import { Icon } from '@iconify/vue';
const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(HorizontalItems);
</script>

    <template >
        <div class="horizontalMenu  bg-surface relative border-t border-t-borderColor hidden lg:block">
            <div :class="customizer.boxed ? 'maxWidth' : 'px-6'">
                <ul class="gap-1 horizontal-navbar">
                    <!---Menu Loop -->
                    <li v-for="(item, i) in sidebarMenu" :key="i" class="navItem">
                        <!---If Has Child -->
                        <NavCollapse :item="item" :level="0" v-if="item.children" />
                        <!---Single Item-->
                        <NavItem :item="item" v-else />
                        <!---End Single Item-->
                    </li>
                </ul>
            </div>    
        </div>
        <div id="docs-sidebar" class="hidden leftSidebar lg:hidden hs-overlay hs-overlay-open:translate-x-0 z-[60] -translate-x-full transition-all duration-300 transform  fixed top-0 left-0 bottom-0 bg-surface  overflow-y-auto scrollbar-y  lg:translate-x-0 lg:right-auto lg:bottom-0 ">
            <VerticalSidebar />
        </div>
    </template>
    <!-- <div v-else class="mobile-menu">
        <VerticalSidebar />
    </div> -->
    <!-- <div >
        <VerticalSidebar />
    </div> -->

