<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { darkTableData } from '@/_mockApis/components/table/basicTables';

</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Dark -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Dark Table">
                <v-card class="border" elevation="0">
                    <v-table theme="dark" class="month-table">
                        <thead>
                            <tr>
                                <th class="text-sm font-semibold">Users</th>
                                <th class="text-sm font-semibold">Project Name</th>
                                <th class="text-sm font-semibold">Team</th>
                                <th class="text-sm font-semibold">Status</th>
                                <th class="text-sm font-semibold">Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in darkTableData" :key="item.name" class="month-item">
                                <td>
                                    <div class="flex items-center">
                                        <v-avatar size="40">
                                            <img :src="item.avatar" alt="avatar" height="40" />
                                        </v-avatar>
                                        <div class="ml-4">
                                            <h6 class="text-sm font-semibold text-no-wrap">{{ item.name }}</h6>
                                            <div class="text-sm text-grey100">{{ item.post }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-sm  text-no-wrap">{{ item.pname }}</h6>
                                </td>
                                <td>
                                    <div class="flex items-center">
                                        <div class="ml-2 flex flex-row-reverse">
                                            <v-avatar v-for="team in item.teams" :key="team.id" size="35"
                                                :class="'ml-n2 avtar-border bg-' + team.color">
                                                {{ team.text }}
                                            </v-avatar>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <v-chip rounded="pill" class="font-bold" :color="item.statuscolor" size="small"
                                        label>{{
                                            item.status
                                        }}</v-chip>
                                </td>
                                <td>
                                    <h6 class="text-sm text-no-wrap">{{ item.budget }}</h6>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
