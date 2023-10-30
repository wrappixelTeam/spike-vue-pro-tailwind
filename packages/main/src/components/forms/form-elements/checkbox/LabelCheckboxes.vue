<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(true);
const unchecked = ref(false);
</script>
<template>
    <div class="flex gap-3 justify-center items-center flex-column flex-sm-row">
        <v-checkbox-btn color="primary" hide-details v-model="checked" label="Checked"></v-checkbox-btn>
        <v-checkbox-btn color="primary" disabled hide-details v-model="unchecked" label="Unchecked"></v-checkbox-btn>
    </div>
</template>
