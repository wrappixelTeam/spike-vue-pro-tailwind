<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { heightTableData, tableActionData} from '@/_mockApis/components/table/basicTables';
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Height -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Height Table">
                <v-card class="border" elevation="0">
                    <div class="border-table">
                    <v-table class="month-table" height="400px">
                        <thead>
                            <tr>
                                <th class="text-base">Authors</th>
                                <th class="text-base">Courses</th>
                                <th class="text-base">Users</th>
                                <th class="text-base"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in heightTableData" :key="item.name" class="month-item">
                                <td>
                                    <div class="flex items-center">
                                        <v-avatar size="42" rounded="md">
                                            <img :src="item.avatar" alt="avatar" height="42" />
                                        </v-avatar>
                                        <div class="ml-4">
                                            <h6 class="text-sm font-semibold">{{ item.name }}</h6>
                                            <div class="text-sm text-medium-emphasis mt-1">{{ item.handle }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex items-center">
                                        <div class="flex">
                                            <v-chip v-for="course in item.courses" :key="course.status" rounded="pill"
                                                class="mr-2" :color="course.statuscolor" size="small">
                                                {{ course.status }}
                                            </v-chip>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-sm text-medium-emphasis">{{ item.users }}</div>
                                </td>
                                <td>
                                    <v-btn size="30" icon variant="flat" class="grey100">
                                        <v-avatar size="22">
                                            <DotsIcon size="20" color="grey100" />
                                        </v-avatar>
                                        <v-menu activator="parent">
                                            <v-list>
                                                <v-list-item value="action" v-for="list in tableActionData" :key="list.listtitle"
                                                    hide-details min-height="38">
                                                    <v-list-item-title>
                                                        <v-avatar size="20" class="mr-2">
                                                            <component :is="list.icon" stroke-width="2" size="20" />
                                                        </v-avatar>
                                                        {{ list.listtitle }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-btn>
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
