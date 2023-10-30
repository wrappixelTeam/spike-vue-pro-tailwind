<script setup lang="ts">
import { ref } from "vue";
import { StudentProgressReportData } from '@/_mockApis/components/school-pages/detail_tables';
import type { CircleCheckIcon } from "vue-tabler-icons";
/*tab*/
const tab = ref(null);
</script>
<template>
    <div class="upcomming-schedule">
        <v-tabs v-model="tab" bg-color="transparent" min-height="42" height="42">
            <v-tab value="Report" color="white" class="text-base mr-3" rounded="pill">Progress Report</v-tab>
            <v-tab value="Fees" color="white" class="text-base" rounded="pill">Fees</v-tab>
        </v-tabs>
        <VCard elevation="10" class="mt-6">
            <v-card-text>
                <div class="justify-center ">

                    <v-window v-model="tab">
                        <v-window-item value="Report">

                            <h5 class="text-lg font-semibold pb-3">Progress Report</h5>
                            <v-divider></v-divider>
                            <div class="border-table mt-5">
                                <v-table class="month-table">
                                    <thead>
                                        <tr>
                                            <th class="text-base text-no-wrap">Code</th>
                                            <th class="text-base text-no-wrap">Subject Name</th>
                                            <th class="text-base text-no-wrap">Marks</th>
                                            <th class="text-base text-no-wrap">Grade</th>
                                            <th class="text-base text-no-wrap">Remarks</th>
                                        </tr>   
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in StudentProgressReportData" :key="item.code" class="month-item">
                                            <td>
                                                <h6 class="text-sm font-medium text-grey200">{{ item.code }}</h6>
                                            </td>
                                            <td class="text-sm text-no-wrap mt-1 font-medium text-grey200">{{ item.sub }}</td>
                                            <td>
                                                <div class="">
                                                    <div class="text-xs mb-1 ">{{ item.marks }}</div>
                                                    <v-progress-linear height="7" :color="item.statuscolor" rounded
                                                        :model-value="item.marks"></v-progress-linear>

                                                </div>
                                            </td>
                                            <td
                                                :class="'text-sm font-semibold  text-no-wrap mt-1 text-' + item.statuscolor">
                                                {{ item.grad }}</td>
                                            <td
                                                :class="'text-sm font-semibold  text-no-wrap mt-1 text-' + item.remarkcolor">
                                                {{ item.remarks }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </div>


                        </v-window-item>
                        <v-window-item value="Fees">


                            <div class="mb-4 border-bottom pb-3">
                                <h5 class="text-lg font-semibold">Fees Report</h5>
                            </div>

                            <div class="flex justify-between mt-12 w-100">
                                <div class="text-sm text-grey100 flex align-items-center">
                                    Standard
                                </div>

                                <div class="flex align-items-center">
                                    <div class="flex justify-content-end">
                                        <sup class="text-lg mt-3 text-primary mr-1">$</sup>
                                        <h1 class="display-1 font-weight-light mb-0 text-primary">650</h1>
                                        <sub class="text-h4 mt-6 text-grey100 font-weight-regular">/6 month</sub>
                                    </div>
                                </div>
                            </div>



                            <ul class="g-2 my-4">
                                <li class="mb-2 flex items-center">
                                    <CircleCheckIcon stroke-width="1.5" size="20" class="text-success"></CircleCheckIcon>
                                    <span class="text-sm text-grey100 pl-2">1 Sem Fees</span>
                                </li>

                                <li class="mb-2 flex items-center">
                                    <CircleCheckIcon stroke-width="1.5" size="20" class="text-success"></CircleCheckIcon>
                                    <span class="text-sm text-grey100 pl-2">Included Documents</span>
                                </li>

                                <li class="mb-2 flex items-center">
                                    <CircleCheckIcon stroke-width="1.5" size="20" class="text-success"></CircleCheckIcon>
                                    <span class="text-sm text-grey100 pl-2">Library Fee</span>
                                </li>

                                <li class="mb-2 flex items-center">
                                    <CircleCheckIcon stroke-width="1.5" size="20" class="text-success"></CircleCheckIcon>
                                    <span class="text-sm text-grey100 pl-2">Student Service Fees</span>
                                </li>
                            </ul>
                            <div class="flex items-center justify-between mb-2 mt-6">
                                <h5 class="text-base text-grey100">Days</h5>
                                <div class="text-sm text-grey100">75% Completed</div>
                            </div>
                            <v-progress-linear model-value="75" height="7" color="primary" rounded></v-progress-linear>
                            <div class="progress bg-light-primary mb-1">
                                <div class="progress-bar bg-primary w-75" role="progressbar" aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="text-sm text-grey100">4 days remaining</span>
                            <div class="d-grid w-100 mt-4 pt-2">
                                <v-btn color="primary" class="mt-4 mb-2"> Pay Full Fees</v-btn>
                            </div>

                        </v-window-item>
                    </v-window>

                </div>
            </v-card-text>
    </VCard>
</div></template>