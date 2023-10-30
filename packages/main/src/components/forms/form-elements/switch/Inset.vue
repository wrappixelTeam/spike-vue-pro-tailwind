<template>
    <div class="flex justify-center">
    <div class="flex gap-4 justify-center items-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
        <v-switch color="primary" :model-value="true" hide-details inset></v-switch>
        <v-switch color="primary" :model-value="false" hide-details inset></v-switch>
        <v-switch color="primary" :model-value="true" disabled hide-details inset></v-switch>
        <v-switch color="primary" :model-value="false" disabled hide-details inset></v-switch>
    </div>
</div>
</template>
