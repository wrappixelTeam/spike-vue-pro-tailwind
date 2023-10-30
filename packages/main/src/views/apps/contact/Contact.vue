<script setup lang="ts">
import { ref } from 'vue';
import EditableTable from '@/components/table/EditableTable.vue';
// theme breadcrumb
const page = ref({ title: 'Contact List' });
</script>

<template>
    <div class="card relative overflow-hidden">
        <div class="card-body">
            <h5 class="text-lg font-semibold mb-7">Contact List</h5>
            <EditableTable />
        </div>
    </div>
</template>
