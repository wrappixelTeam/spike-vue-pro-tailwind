<script setup lang="ts">
import { ref } from 'vue';
import ResultTable from '@/components/school-pages/exam/ResultTable.vue';
</script>
<template>
    <v-card elevation="10">
        <v-card-text>
            <h5 class="text-lg font-semibold mb-7">Exam Results</h5>
            <ResultTable />
        </v-card-text>
    </v-card>
</template>
