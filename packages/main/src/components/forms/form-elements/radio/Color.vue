<script setup lang="ts">
import { ref } from 'vue';
const radioColors = ref('1');
// radio color data
const radioColor = ref(['primary', 'secondary', 'success', 'error']);
</script>
<template>
    <div class="">
        <v-radio-group v-model="radioColors" inline class="flex gap-3 justify-center items-center flex-column flex-sm-row">
            <v-radio v-for="btn in radioColor" :key="btn" :color="btn"  value="1" hide-details></v-radio>
        </v-radio-group>
    </div>
</template>
