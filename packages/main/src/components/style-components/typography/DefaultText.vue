<script setup lang="ts">
import { ref } from "vue"; 
</script>
<template>
    <div class="flex flex-column gap-1">
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-lg text-primary">Text Primary</h5>
            <div class="text-sm text-primary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-lg textSecondary">Text Secondary</h5>
            <div class="text-sm textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-lg text-info">Text Info</h5>
            <div class="text-sm textSecondary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-lg text-warning">Text Warning</h5>
            <div class="text-sm text-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-lg text-error">Text Error</h5>
            <div class="text-sm text-error">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-lg text-success">Text Success</h5>
            <div class="text-sm text-success" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
    </div>
</template>
