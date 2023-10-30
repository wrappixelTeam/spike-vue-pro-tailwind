<script setup lang="ts">
import { ref } from 'vue';
import TeachersTable from '@/components/school-pages/teachers/TeachersTable.vue';
</script>
<template>
    <v-card elevation="10">
        <v-card-text>
             <h5 class="text-lg font-semibold mb-7">All Teachers Data</h5>
            <TeachersTable />
        </v-card-text>
    </v-card>
</template>
