<script setup lang="ts">
import { ref } from 'vue';
// buttons color data
const btnsColor = ref(['primary', 'secondary', 'error', 'warning','success']);
</script>
<template>
    <div class="flex gap-3 items-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
        <v-btn v-for="btn in btnsColor" :key="btn" :color="btn" class="px-4 rounded-pill">
            {{ btn }}
        </v-btn>
    </div>
</template>
