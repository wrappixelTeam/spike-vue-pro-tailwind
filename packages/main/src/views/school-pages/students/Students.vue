<script setup lang="ts">
import { ref } from 'vue';
import StudentTable from '@/components/school-pages/students/StudentTable.vue';
</script>
<template>
    <v-card elevation="10">
        <v-card-text>
             <h5 class="text-lg font-semibold mb-7">All Students Data</h5>
            <StudentTable />
        </v-card-text>
    </v-card>
</template>
