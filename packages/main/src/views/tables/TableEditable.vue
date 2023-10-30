<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

//Table
import EditableTable from '@/components/table/EditableTable.vue';
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Editable -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Editable Table">
                <EditableTable />
            </UiParentCard>
        </v-col>
    </v-row>
</template>
