<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import ComboboxDense from '@/components/forms/form-elements/combobox/ComboboxDense.vue';
import ComboboxMultiple from '@/components/forms/form-elements/combobox/ComboboxMultiple.vue';

</script>
<template>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Combobox">
                <v-row>
                    <!-- Density Combobox -->
                    <v-col cols="12" sm="12">
                        <UiChildCard title="Density">
                            <ComboboxDense />
                        </UiChildCard>
                    </v-col>
                    <!-- Multiple Combobox -->
                    <v-col cols="12" sm="12">
                        <UiChildCard title="Multiple">
                            <ComboboxMultiple />
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>

