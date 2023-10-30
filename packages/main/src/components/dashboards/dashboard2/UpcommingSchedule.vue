<script setup lang="ts">
import { ref } from "vue";
import { profileImgData } from '@/_mockApis/components/dashboards/dashboard2'
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
                <h5 class="text-lg mb-1 font-semibold">Upcoming Scheduls</h5>
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

            <nav class="flex justify-between mt-5 border-b pb-2 border-borderColor " aria-label="Tabs" role="tablist">
                <button type="button"
                    class="hs-tab-active:bg-primary hs-tab-active:text-white  py-2 px-5 inline-flex items-center gap-2 bg-transparent text-base font-medium text-center text-textSecondary lowercase rounded-full hover:text-primary  active"
                    id="pills-on-gray-color-item-1" data-hs-tab="#pills-on-gray-color-1"
                    aria-controls="pills-on-gray-color-1" role="tab">
                    1 to 3
                </button>
                <button type="button"
                    class="hs-tab-active:bg-primary hs-tab-active:text-white  py-2 px-5 inline-flex items-center gap-2 bg-transparent text-base font-medium text-center text-textSecondary lowercase rounded-full hover:text-primary"
                    id="pills-on-gray-color-item-2" data-hs-tab="#pills-on-gray-color-2"
                    aria-controls="pills-on-gray-color-2" role="tab">
                    4 to 7
                </button>
                <button type="button"
                    class="hs-tab-active:bg-primary hs-tab-active:text-white  py-2 px-5 inline-flex items-center gap-2 bg-transparent text-base font-medium text-center text-textSecondary lowercase rounded-full hover:text-primary"
                    id="pills-on-gray-color-item-3" data-hs-tab="#pills-on-gray-color-3"
                    aria-controls="pills-on-gray-color-3" role="tab">
                    8 to 10
                </button>
            </nav>

            <div class="mt-3">
                <div id="pills-on-gray-color-1" role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                    <perfect-scrollbar style="height: 350px" class="mt-6 pt-4">
                        <div class="flex">
                            <div>
                                <ul>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">8:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">8:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">9:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">9:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">10:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">10:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">11:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">11:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">12:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">12:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">13:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-0 text-sm text-grey100">13:30</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full mx-4">
                                <div class="card border-l-[5px] p-3 border-indigo mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">Marketing Meeting</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">08:30 - 10:00</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-l-[5px] p-3 border-success mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">Applied mathematics</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">10:15 - 11:45</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-l-[5px] p-3 border-error mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">SEO Session with Team</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">12:00 - 13:25</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>
                <div id="pills-on-gray-color-2" class="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-2">
                    <perfect-scrollbar style="height: 350px" class="mt-6 pt-4">
                        <div class="flex">
                            <div>
                                <ul>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">8:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">8:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">9:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">9:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">10:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">10:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">11:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">11:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">12:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">12:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">13:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-0 text-sm text-grey100">13:30</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full mx-4">
                                <div class="card border-l-[5px] p-3 border-info mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">Marketing Meeting</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">08:30 - 10:00</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-l-[5px] p-3 border-primary mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">Applied mathematics</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">10:15 - 11:45</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-l-[5px] p-3 border-secondary mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">SEO Session with Team</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">12:00 - 13:25</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>
                <div id="pills-on-gray-color-3" class="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-3">
                    <perfect-scrollbar style="height: 350px" class="mt-6 pt-4">
                        <div class="flex">
                            <div>
                                <ul>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">8:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">8:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">9:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">9:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">10:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">10:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">11:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">11:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">12:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">12:30</p>
                                    </li>
                                    <li>
                                        <p class="mb-5 pb-3 text-sm text-grey100">13:00</p>
                                    </li>
                                    <li>
                                        <p class="mb-0 text-sm text-grey100">13:30</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full mx-4">
                                <div class="card border-l-[5px] p-3 border-error mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">Marketing Meeting</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">08:30 - 10:00</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-l-[5px] p-3 border-success mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">Applied mathematics</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">10:15 - 11:45</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-l-[5px] p-3 border-indigo mt-7">
                                    <div class="p-2">
                                        <h6 class="text-base font-semibold">SEO Session with Team</h6>
                                        <div class="flex items-center mt-1">
                                            <ClockIcon stroke-width="1.5" size="18" class="text-grey100" />
                                            <span class="text-sm ml-1 text-grey100">12:00 - 13:25</span>
                                        </div>
                                        <div class="flex items-center mt-12 gap-3">
                                            <img v-for="item in profileImgData" :key="item.img" :src="item.img" alt="profile" class="rounded-full h-8 w-8 -mr-5">
                                            <p class="text-sm text-grey100 ml-3">+18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>
            </div>
        </div>
    </div>
</template>
