<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import CustomFrom from '@/components/forms/form-custom/CustomFrom.vue'
// theme breadcrumb
</script>

<template>
   <v-row>
        <v-col cols="12" class="mb-12">
            <UiParentCard title="Custom Form">
                <CustomFrom/>
            </UiParentCard>           
        </v-col>
   </v-row>           
</template>
