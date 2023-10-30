<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getLightborder, getTextGrey100 } from '@/utils/UpdateColors';
import { Icon } from '@iconify/vue';
const select = ref('This Week');
const items = ref(['March 2023', 'April 2023', 'May 2023']);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: "",
                data: [0, 20, 15, 19, 14, 25, 32]
            },
            {
                name: "",
                data: [0, 12, 19, 13, 26, 16, 25]
            },
        ],

        chart: {
            type: "line",
            fontFamily: `inherit`,
            foreColor: "#adb0bb",
            width: "100%",
            height: 260,
            toolbar: {
                show: false,
            },
            stacked: false
        },

        legend: {
            show: false,
        },
        stroke: {
            width: 3,
            curve: "smooth",

        },
        grid: {
            borderColor: getLightborder.value,

            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                },

            },
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
        },
        colors: [getPrimary.value, "#5AC8FA"],

        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: ["#6993ff"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        markers: {
            size: 0,
        },
        tooltip: {
            theme: "dark",
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    colors: getTextGrey100.value,
                }
            },
            type: 'category',
            categories: [
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },

        },
        yaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: getTextGrey100.value,
                }
            }
        }
    };
});
</script>
<template>
    <div class="card">
        <div class="card-body relative pb-0 border-b border-b-borderColor">
            <h5 class="text-xl mb-1 font-semibold">
                Congratulations Jonathan
            </h5>
            <div class="text-sm text-grey100 pb-1 font-medium -mt-1">You have done 38% more sales</div>
            <div class="mt-6  sm:flex block">
                <ul class="list-unstyled mb-0">
                    <li class="flex items-center mb-5">
                        <div class="bg-lightsuccess me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:cart-3-line-duotone" height="24" width="24" class="text-success"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">64 new orders</h6>
                            <p class="text-sm text-grey100  font-medium">Processing</p>
                        </div>
                    </li>
                    <li class="flex items-center mb-5">
                        <div class="bg-lightwarning me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:pause-linear" height="24" width="24" class="text-warning"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">4 orders</h6>
                            <p class="text-sm text-grey100  font-medium">On hold</p>
                        </div>
                    </li>
                    <li class="flex items-center mb-5">
                        <div class="bg-lightinfo me-4 rounded-full flex items-center justify-center h-12 w-12" size="48">
                            <Icon icon="solar:delivery-linear" height="24" width="24" class="text-info"/>
                        </div>
                        <div>
                            <h6 class="mb-1 text-base font-semibold">12 orders</h6>
                            <p class="text-sm text-grey100  font-medium">Delivered</p>
                        </div>
                    </li>
                </ul>
                <div class="man-working-on-laptop absolute right-0 bottom-0">
                    <img src="@/assets/images/backgrounds/man-working-on-laptop.png" class="w-100" alt="">
                </div>
            </div>


        </div>
        <div class="card-body">
            <div class="sm:flex justify-between block items-center-center">
                <div>
                    <h5 class="text-xl mb-1 font-semibold">
                        Total Orders
                    </h5>
                    <div class="text-sm text-grey100 pb-1 font-medium -mt-1">Weekly order updates</div>
                </div>
                <div class="my-sm-0 my-3">
                    <select
                        class="py-2 px-3 pr-9 block text-textSecondary bg-transparent w-full border-borderColor rounded-sm text-sm focus:border-primary focus:ring-blue-500">
                        <option selected>{{ select }}</option>
                        <option>{{ items[0] }}</option>
                        <option>{{ items[1] }}</option>
                        <option>{{ items[2] }}</option>
                    </select>
                </div>
            </div>
            <div>
                <apexchart type="line" height="260" :options="chartOptions" :series="chartOptions.series"> </apexchart>
            </div>
        </div>
    </div>
</template>