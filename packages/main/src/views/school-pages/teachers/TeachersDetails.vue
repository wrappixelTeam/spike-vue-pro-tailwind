<script setup lang="ts">
import { ref } from "vue";
import TeacherProfile from "@/components/school-pages/teachers/TeacherProfile.vue";
import TeacherSkills from "@/components/school-pages/teachers/TeacherSkills.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="4">
        <TeacherProfile/>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
        <TeacherSkills/>
    </v-col>
  </v-row>
</template>
