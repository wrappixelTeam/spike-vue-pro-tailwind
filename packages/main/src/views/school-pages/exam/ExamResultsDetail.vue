<script setup lang="ts">
import { ref } from "vue";
import StudentProfile from "@/components/school-pages/exam/StudentProfile.vue";
import ProgressReport from "@/components/school-pages/exam/ProgressReport.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="4">
        <StudentProfile/>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
        <ProgressReport/>
    </v-col>
  </v-row>
</template>
