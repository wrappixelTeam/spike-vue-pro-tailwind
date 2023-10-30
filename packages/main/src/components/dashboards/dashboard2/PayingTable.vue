<script setup lang="ts">
import { ref } from "vue";
import { projectTableData } from "@/_mockApis/components/dashboards/dashboard2";
const items = ref([
    { title: "Action" },
    { title: "Another action" },
    { title: "Something else here" },
]);
</script>
<template>
    <div class="card relative overflow-hidden">
        <div class="card-body ">
            <div class="flex items-center  justify-between">
                <div>
                    <h5 class="text-lg mb-1 font-semibold">Top Employees</h5>
                </div>
                <div class="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-basic" type="button"
                        class="hs-dropdown-toggle py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-sm font-semibold ">
                        <DotsVerticalIcon size="22" class="hs-dropdown-open:rotate-180 text-grey100" />
                    </button>
                    <div class="shadow hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 mt-2 bg-surface shadow-md rounded-lg p-2 "
                        aria-labelledby="hs-dropdown-basic">
                        <a v-for="(item, i) in items" :key="i" :value="i"
                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-grey100" href="#">
                            <span class="flex">
                                {{ item.title }}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="month-table">
                <table class="mt-5 mb-0 table w-full">
                   
                        <thead class="text-left">
                            <tr>
                                <th class="text-sm font-semibold text-grey200 text-no-wrap border-0">Profile</th>
                                <th class="text-sm font-semibold text-grey200 text-no-wrap border-0">Hour Rate</th>
                                <th class="text-sm font-semibold text-grey200 text-no-wrap border-0">Skills</th>
                                <th class="text-sm font-semibold text-grey200 text-no-wrap border-0">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in projectTableData" :key="item.leadname" :class="item.activestate"
                               >
                                <td class="border-0">
                                    <div class="flex items-center">
                                        <img :src="item.img" class="rounded-full" alt="user" width="50" />
                                        <div class="mx-4">
                                            <h4 class="text-sm font-bold text-no-wrap text-grey200">
                                                {{ item.leadname }}
                                            </h4>
                                            <h6 class="text-sm  text-no-wrap font-medium mt-1 text-grey200">
                                                {{ item.leademail }}
                                            </h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-0">
                                    <h5 class="text-sm  font-medium text-no-wrap text-grey200">
                                        {{ item.projectname }}
                                    </h5>
                                </td>
                                <td class="border-0">
                                    <h4 class="text-sm text-no-wrap font-medium text-grey200">{{ item.skill }}</h4>
                                </td>
                                <td class="border-0">
                                   
                                    <span class="rounded-full border py-[2px] font-medium text-center text-xs px-2"
                                :class="'bg-light' + item.statuscolor + ' text-' + item.statuscolor + ''">
                                {{ item.statustext }}
                            </span>
                                </td>

                            </tr>
                        </tbody>
                   
                </table>
            </div>
        </div>
    </div>
</template>