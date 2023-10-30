<script setup lang="ts">
import { optionIconData } from '@/_mockApis/headerData';
import { CircleIcon } from 'vue-tabler-icons';
</script>
<template>
    <v-list-subheader class="smallCap text-capitalize text-sm mt-7 flex align-items-center">
        <span class="mini-icon">
            <DotsIcon size="16" stroke-width="1.5" class="iconClass" />
        </span>
        <span class="mini-text">More options</span>
    </v-list-subheader>
    <v-list-item v-for="item in optionIconData" :key="item.title">
        <template v-slot:prepend>
            <div class="moreoption-icon">
                <CircleIcon :class="'text-' + item.iconcolor" stroke-width="1.5" size="15" />
            </div>
        </template>
        <v-list-item-title>
            {{ $t(item.title) }}
    </v-list-item-title>
</v-list-item></template>