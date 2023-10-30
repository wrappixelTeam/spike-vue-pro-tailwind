<script setup lang="ts">
import { ref } from "vue";
import { LatestReviewData, tableActionData } from "@/_mockApis/components/dashboards/dashboard1";
import { Icon } from '@iconify/vue';
const items = ref([
    { title: "Action" },
    { title: "Another action" },
    { title: "Something else here" },
]);
const page = ref(1);
</script>
<template>
    <div class="card">
        <div class="card-body relative">
            <div class="sm:flex block justify-between items-center-center mb-4">
                <div>
                    <h5 class="text-lg font-semibold">
                        Latest reviews
                    </h5>
                    <div class="text-sm text-grey100 pb-1 font-medium">Reviewd received across all channels
                    </div>
                </div>
                <div class="text-right my-sm-0 my-3">
                    <div class="flex items-center">
                        <div class="mr-3">
                            <div class="relative">
                                <SearchIcon size="20" class="mr-3 absolute left-3 top-3 text-grey100" />
                                <input class="w-full rounded-sm bg-transparent focus:border-primary border-borderColor pl-10" type="text"
                                    placeholder="Search">
                            </div>
                        </div>
                        <div class="hs-dropdown relative inline-flex">
                            <button id="hs-dropdown-basic" type="button"
                                class="hs-dropdown-toggle py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-sm border border-borderColor font-semibold ">
                                <DotsVerticalIcon size="20" class="hs-dropdown-open:rotate-180 text-grey100" />
                            </button>
                            <div class="shadow bg-surface hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 mt-2  shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                aria-labelledby="hs-dropdown-basic">
                                <a v-for="list in tableActionData" :key="list.listtitle"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-grey100" href="#">
                                    <span class="flex">
                                        <component :is="list.icon" size="20" class="mr-3" />
                                        {{ list.listtitle }}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table w-full text-left">
                <thead class="border-b border-borderColor">
                    <tr>
                        <th class="pl-0">
                            <input type="checkbox"
                                class="border border-borderColor rounded-[3px] text-primary  focus:ring-0 focus:ring-offset-0"
                                id="hs-checkbox-group-2 ">
                        </th>
                        <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Products</th>
                        <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Customer</th>
                        <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Reviews</th>
                        <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Status</th>
                        <th class="text-base text-left font-semibold text-grey200 text-no-wrap">Time</th>
                        <th class="text-base text-left font-semibold text-grey200 text-no-wrap"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in LatestReviewData" :key="item.name" class="month-item">
                        <td class="pl-0">
                            <input type="checkbox"
                                class="border border-borderColor rounded-[3px] text-primary  focus:ring-0 focus:ring-offset-0"
                                id="hs-checkbox-group-1">
                        </td>
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
                            <div class="flex items-center">
                                <img :src="item.profile" alt="profile" class="mr-3 h-8 w-8 rounded-full object-cover" />
                                <div>
                                    <h6 class="text-base font-semibold">{{ item.customername }}</h6>
                                    <div class="text-sm text-grey200 -mt-1">{{ item.customeremail }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <div class="ml-n1">
                                    <div v-if="item.review == 5" class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                    </div>
                                    <div v-else-if="item.review == 4"
                                        class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                    </div>
                                    <div v-else-if="item.review == 4.5"
                                        class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                        <StarHalfFilledIcon size="14" class="text-warning" />
                                    </div>
                                    <div v-else-if="item.review == 3"
                                        class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                    </div>
                                    <div v-else-if="item.review == 3.5"
                                        class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                        <StarHalfFilledIcon size="14" class="text-warning" />
                                    </div>
                                    <div v-else-if="item.review == 2"
                                        class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                    </div>
                                    <div v-else-if="item.review == 2.5"
                                        class="flex-shrink-0 flex justify-start space-x-1 mt-3">
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                         <Icon icon="solar:star-bold" class="text-warning" height="15" width="15" />
                                        <StarHalfFilledIcon size="14" class="text-warning" />
                                    </div>

                                </div>
                                <p class="text-grey200 text-sm font-medium line-clamp-2 mt-n1 max-w-[200px]">{{
                                    item.reviewtext }}</p>
                            </div>
                        </td>
                        <td>
                            <span class="rounded-full border py-1 text-center text-xs px-2"
                                :class="'bg-light' + item.statuscolor + ' text-' + item.statuscolor + ''">
                                {{ item.statustext }}
                            </span>

                        </td>
                        <td>
                            <p class="text-sm font-medium text-grey200">{{ item.time }}</p>
                        </td>
                        <td class="text-right">
                            <div class="hs-dropdown relative inline-flex">
                                <button id="hs-dropdown-basic" type="button"
                                    class="hs-dropdown-toggle  inline-flex justify-center items-center gap-2 font-medium 
                                    ">
                                    <DotsVerticalIcon size="20" class="hs-dropdown-open:rotate-180 text-grey100" />
                                </button>

                                <div class="shadow hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 mt-2  shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
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
            <div class="sm:flex items-center justify-between pt-5  border-t border-borderColor">
                <div class="text-grey100 font-medium text-sm text-sm-left text-center mb-sm-0 mb-2">1-6 of 32
                </div>
                <div>
                    <nav class="flex justify-center items-center space-x-2">
                        <a class="text-grey10 h-8 w-8 inline-flex items-center gap-2 rounded-md" href="#">
                            <span aria-hidden="true">«</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="w-8 h-8 bg-lightsecondary flex justify-center items-center text-sm font-medium rounded-full hover:bg-lightsecondary"
                            href="#" aria-current="page">1</a>
                        <a class="w-8 h-8 text-grey100 hover:text-blue-600 p-4 flex justify-center items-center text-sm font-medium rounded-full hover:bg-lightsecondary"
                            href="#">2</a>
                        <a class="w-8 h-8 text-grey100 hover:text-blue-600 p-4 flex justify-center items-center text-sm font-medium rounded-full hover:bg-lightsecondary"
                            href="#">3</a>
                        <a class="text-grey100  p-4 flex justify-center items-center gap-2 rounded-md " href="#">
                            <span class="sr-only">Next</span>
                            <span aria-hidden="true">»</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>