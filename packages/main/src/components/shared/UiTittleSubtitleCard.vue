<script setup lang="ts">
const props = defineProps({
    title: String,
    subtitle:String
});
</script>
// ===============================|| Ui Parent Card||=============================== //
<template>
    <v-card elevation="10" >
        <v-card-text>
            <div>
                <h3 class="text-lg title mb-1">{{title}}</h3>
                <h5 class="text-sm">{{subtitle}}</h5>
            </div>
            <slot />
        </v-card-text>
    </v-card>
</template>
