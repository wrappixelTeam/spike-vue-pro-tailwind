<script setup lang="ts">
import { ref } from 'vue';
//FAQ components
import FaqQuestion from '@/components/pages/faq/FaqQuestion.vue';
import StillHaveQuestions from '@/components/pages/faq/StillHaveQuestions.vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
const page = ref({ title: 'FAQ' });
</script>

<template>
    <BaseBreadcrumb :title="page.title"></BaseBreadcrumb>
    <FaqQuestion />
    <StillHaveQuestions />
</template>
