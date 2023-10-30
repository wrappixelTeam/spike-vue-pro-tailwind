<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

/*Components*/
import DatePicker from '@/components/forms/form-elements/datetime/DatePicker.vue';
import TimePicker from '@/components/forms/form-elements/datetime/TimePicker.vue';


</script>

// ===============================|| Ui Checkbox ||=============================== //
<template>

    <v-row>
        <v-col cols="12">
            <UiParentCard title="Date Time">
                <v-row>
                    <!-- Date Picker -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Date Picker">
                            <DatePicker/>
                        </UiChildCard>
                    </v-col>
                    <!-- Time Picker -->
                    <v-col cols="12" lg="6">
                        <UiChildCard title="Time Picker">
                            <TimePicker/>
                        </UiChildCard>
                    </v-col>
                </v-row>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
