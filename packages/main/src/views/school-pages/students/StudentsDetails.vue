<script setup lang="ts">
import { ref } from "vue";
import StudentProfile from "@/components/school-pages/students/StudentProfile.vue";
import StudentReport from "@/components/school-pages/students/StudentReport.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="4">
        <StudentProfile/>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
        <StudentReport/>
    </v-col>
  </v-row>
</template>
