<script setup lang="ts">
import { ref } from 'vue';
import ExamTable from '@/components/school-pages/exam/ScheduleTable.vue';
</script>
<template>
    <v-card elevation="10">
        <v-card-text>
            <h5 class="text-lg font-semibold mb-7">All Exam Schedule</h5>
            <ExamTable />
        </v-card-text>
    </v-card>
</template>
