<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiParentCard from '@/components/shared/UiParentCard.vue';
import {tableFixedHeaderData} from '@/_mockApis/components/table/basicTables';
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Header Fixed -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Header Fixed Table">
                <v-card class="border" elevation="0">
                    <div class="border-table">
                <v-table class="month-table" fixed-header height="400px">
                    <thead>
                <tr>
                    <th class="text-base">Customer</th>
                    <th class="text-base">Status</th>
                    <th class="text-base">Email Address</th>
                    <th class="text-base">Teams</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableFixedHeaderData" :key="item.name" class="month-item">
                    <td>
                        <div class="flex items-center">
                            <v-avatar size="40">
                                <img :src="item.avatar" alt="avatar" height="40" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-base">{{ item.name }}</h6>
                                <div class="text-sm text-medium-emphasis">{{ item.handle }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <v-chip rounded="pill"  v-if="item.statusoffline" class="font-bold pl-1 pr-2" :color="item.statuscolor" size="small">
                            <ClockHour4Icon size="15" class="mr-1" />
                            {{ item.status }}
                        </v-chip>

                        <v-chip rounded="pill" v-else class="font-bold pl-1 pr-2" :color="item.statuscolor" size="small">
                            <CircleIcon size="15" class="mr-1" />
                            {{ item.status }}
                        </v-chip>
                    </td>
                    <td>
                        <div class="text-sm text-medium-emphasis">{{ item.email }}</div>
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="flex">
                                <v-chip
                                    v-for="team in item.teams"
                                    :key="team.status"
                                    rounded="pill"
                                    :class="'font-bold px-2 mr-2 bg-' + team.statuscolor"
                                    size="small"
                                >
                                    {{ team.status }}
                                </v-chip>
                            </div>
                        </div>
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
