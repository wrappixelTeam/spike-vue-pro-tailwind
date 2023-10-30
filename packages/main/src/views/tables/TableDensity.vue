<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { tableDensityData } from '@/_mockApis/components/table/basicTables';
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Density -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Density Table">
                <!-- <v-table > -->
                <v-card class="border" elevation="0">
                    <div class="border-table">
                <v-table class="month-table" density="compact">
                    <thead>
                <tr>
                    <th class="text-base">User</th>
                    <th class="text-base">Project Name</th>
                    <th class="text-base">Users</th>
                    <th class="text-base">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableDensityData" :key="item.name" class="month-item">
                    <td>
                        <div class="flex items-center">
                            <v-avatar size="40">
                                <img :src="item.avatar" alt="avatar" height="40" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-base">{{ item.name }}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="text-sm text-medium-emphasis">{{ item.post }}</div>
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="ml-2 flex flex-row-reverse">
                                <v-avatar v-for="user in item.users" :key="user.id" size="40" class="ml-n2 avtar-border">
                                    <img :src="user.icon" alt="avatar" height="40" />
                                </v-avatar>
                            </div>
                        </div>
                    </td>
                    <td>
                        <v-chip rounded="pill" class="font-bold py-4 px-3" :color="item.statuscolor" size="small">
                            {{ item.status }}
                        </v-chip>
                    </td>
   
                </tr>
            </tbody>
                </v-table>
                </div>
                </v-card>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
