<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useCustomizerStore } from '../../stores/customizer';
const customizer = useCustomizerStore();
</script>

<template>

  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <v-app class="authpage">
      <RouterView />
    </v-app>
  </v-locale-provider>


  <v-locale-provider v-else>
    <v-app class="authpage">
      <RouterView />
    </v-app>
  </v-locale-provider>
  
</template>

