
<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getLightborder, getTextGrey100 } from '@/utils/UpdateColors';
import { DotsVerticalIcon } from 'vue-tabler-icons';
import { Icon } from '@iconify/vue';
const items = ref([
    { title: "Action" },
    { title: "Another action" },
    { title: "Something else here" },
]);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: "Test Results",
                data: [13, 15, 14, 17, 16, 19, 17],
            },
        ],
        chart: {
            height: 240,
            type: "area",
            fontFamily: `inherit`,
            foreColor: "#626b81",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            borderColor: getLightborder.value,
            strokeDashArray: 4,
            strokeWidth: 1,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        colors: [getPrimary.value],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [20, 180],
            },
        },
        stroke: {
            curve: "smooth",
            width: "2",
        },
        xaxis: {
            categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
                style: {
                    colors: getTextGrey100.value,
                }
            },
        },
        tooltip: {
            theme: "dark",
        },
    };
});

</script>
<template>
    <div class="card relative overflow-hidden">
        <div class="card-body ">
            <div class="flex items-center justify-between">
                <h5 class="text-lg mb-1 font-semibold">Product Sales</h5>
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
            <div>
                <apexchart type="area" height="240" :options="chartOptions" :series="chartOptions.series"> </apexchart>
                <div class="flex items-center mt-2 gap-4">
                    <div class="flex items-center">
                        <div class="bg-lightprimary rounded-full h-10 w-10 flex items-center justify-center me-4">
                            <Icon icon="solar:user-circle-linear" class="text-primary" width="24" height="24" />
                        </div>
                        <div>
                            <h6 class="text-base font-semibold flex items-center">36,436
                                <span color="success" class="ml-1 font-normal rounded-full border py-[2px] text-center text-xs px-2 bg-lightsuccess text-success">+12%
                                </span>
                            </h6>
                            <p class="text-sm -mt-1 text-grey100 font-medium">New Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>