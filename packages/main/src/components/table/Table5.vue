
<script setup lang="ts">
import {basicTableData5,tableActionData} from '@/_mockApis/components/table/basicTables';
</script>
<template>
    <v-card elevation="0" class="mt-6 border">
        <div class="border-table">
        <v-table class="month-table">
            <thead>
                <tr>
                    <th class="text-sm font-semibold">Authors</th>
                    <th class="text-sm font-semibold">Courses</th>
                    <th class="text-sm font-semibold">Users</th>
                    <th class="text-sm font-semibold"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in basicTableData5" :key="item.name" class="month-item">
                    <td>
                        <div class="flex items-center">
                            <v-avatar size="42" rounded="md">
                                <img :src="item.avatar" alt="avatar" height="42" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-sm font-semibold text-no-wrap">{{ item.name }}</h6>
                                <div class="text-sm text-grey100 text-no-wrap mt-1">{{ item.handle }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="flex">
                                <v-chip
                                    v-for="course in item.courses"
                                    :key="course.status"
                                    rounded="pill"
                                    class="mr-2"
                                    :color="course.statuscolor"
                                    size="small"
                                >
                                    {{ course.status }}
                                </v-chip>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="text-sm text-grey100">{{ item.users }}</div>
                    </td>
                    <td>
                        <v-btn size="30" icon variant="flat" class="grey100">
                            <v-avatar size="22">
                                <DotsIcon size="20" color="grey100" />
                            </v-avatar>
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item
                                        value="action"
                                        v-for="list in tableActionData"
                                        :key="list.listtitle"
                                        hide-details
                                        min-height="38"
                                    >
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
</template>
