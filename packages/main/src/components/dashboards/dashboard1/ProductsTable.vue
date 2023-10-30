<script setup lang="ts">
import { ref } from "vue";
import { ProductTableData, tableActionData } from "@/_mockApis/components/dashboards/dashboard1";
import { DotsVerticalIcon } from "vue-tabler-icons";
const items = ref([
    { title: "Action" },
    { title: "Another action" },
    { title: "Something else here" },
]);
</script>
<template>
    <div class="card">
        <div class="card-body relative">
            <div class="border-table">
                <table class="table w-full text-left whitespace-nowrap">
                    <thead class="border-b border-borderColor">
                        <tr>
                            <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Products</th>
                            <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Payment</th>
                            <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Status</th>
                            <th class="text-base text-left font-semibold text-grey200 text-no-wrap"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in ProductTableData" :key="item.name" class="month-item">
                            <td>
                                <div class="flex items-center overflow-hidden">
                                    <img :src="item.img" alt="user" width="60" />
                                    <div class="mx-4" style="width: 130px;">
                                        <h6 class="text-base font-semibold text-no-wrap truncate">
                                            {{ item.name }}
                                        </h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5 class="text-base font-semibold text-no-wrap text-no-wrap">
                                    {{ item.payment }}<span class="text-grey100">/ 499</span>
                                </h5>
                                <div class="text-sm font-medium text-grey100 mb-3 text-no-wrap">{{
                                    item.paymentstatus }}</div>
                                <div>
                                    <div class="flex w-full h-[4px] bg-lightsecondary rounded-full overflow-hidden">
                                        <div :class="'flex flex-col justify-center overflow-hidden bg-'+ item.processcolor "
                                            role="progressbar"  :style="`width:${item.process}%`"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="rounded-full border py-1 text-center text-xs px-2"
                                    :class="'bg-light' + item.statuscolor + ' text-' + item.statuscolor + ''">
                                    {{ item.statustext }}
                                </span>
                            </td>
                            <td class="text-right">
                                <div class="hs-dropdown relative inline-flex">
                                    <button id="hs-dropdown-basic" type="button"
                                        class="hs-dropdown-toggle  inline-flex justify-center items-center gap-2 font-medium   ">
                                        <DotsVerticalIcon size="20" class="hs-dropdown-open:rotate-180 text-grey100" />
                                    </button>

                                    <div class="shadow bg-surface hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 mt-2 shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                        aria-labelledby="hs-dropdown-basic">
                                        <a v-for="list in tableActionData" :key="list.listtitle"
                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-grey100"
                                            href="#">
                                            <span class="flex">
                                                <component :is="list.icon" size="20" class="mr-3" />
                                                {{ list.listtitle }}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>