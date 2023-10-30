<script setup>
import { DotsIcon } from 'vue-tabler-icons';
const props = defineProps({ item: Object });
</script>

<template>
    <div class="smallCap text-capitalize text-sm mt-7 flex items-center">
    <span class="mini-icon"><DotsIcon size="16" stroke-width="1.5" class="iconClass" /></span>
       <span class="mini-text text-xs uppercase pb-5 pl-3">{{ $t(props.item.header) }}</span> 
    </div>
</template>
