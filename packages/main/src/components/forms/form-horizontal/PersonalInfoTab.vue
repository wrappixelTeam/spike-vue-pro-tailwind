<script setup lang="ts">
import { ref } from 'vue';
// import type { VTextField } from 'vuetify/lib/components';
/*Location Select*/
const select = ref('');
const location = ref(['India', 'United Kingdom', 'Srilanka']);

/*Language Select*/
const selectlng = ref('');
const language = ref(['English', 'French']);
</script>
<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">First Name</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <VTextField color="primary" type="text" placeholder="John" hide-details ></VTextField>
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Country</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <VSelect v-model="select" :items="location" single-line  hide-details></VSelect>
                </v-col>
            </v-row>
            <v-row class="items-center">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Birth Date</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <VTextField color="primary"  type="date" hide-details></VTextField>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6">
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Last Name</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="Doe" hide-details />
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Language</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <VSelect v-model="selectlng" :items="language" single-line  hide-details></VSelect>
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Phone no</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="123 4567 201" hide-details></v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6" class="mt-n6">
            <v-row class="items-center">
                <v-col cols="12" sm="9" offset-sm="3">
                    <v-btn color="primary" rounded="pill">Submit</v-btn>
                    <v-btn class="bg-lighterror text-error ml-4" rounded="pill">Cancel</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
