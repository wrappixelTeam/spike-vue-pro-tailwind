<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getLightborder, getTextGrey100 } from '@/utils/UpdateColors';
import { DotsVerticalIcon } from 'vue-tabler-icons';
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
                name: "Profit",
                data: [60, 40, 37, 35, 35, 20, 30],
            },
            {
                name: "Expenses",
                data: [15, 30, 15, 35, 25, 30, 30],
            },
        ],
        colors: [getPrimary.value, "#fb977d"],
        chart: {
            type: "bar",
            fontFamily: `inherit`,
            foreColor: "#adb0bb",
            width: "100%",
            height: 300,
            stacked: true,
            toolbar: {
                show: !1,
            },
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "27%",
                borderRadius: 6,
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            borderColor: getLightborder.value,
            padding: { top: 0, bottom: -8, left: 20, right: 20 },
        },
        tooltip: {
            theme: "dark",
        },
        toolbar: {
            show: false,
        },
        xaxis: {
            categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: getTextGrey100.value,
                }
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: getTextGrey100.value,
                }
            },
        },
        legend: {
            show: false,
        },
    };
});

</script>
<template>
    <div class="card relative overflow-hidden">
        <div class="card-body ">
            <div class="flex items-center justify-between">
                <h5 class="text-lg font-semibold">Profit & Expenses</h5>
                <div class="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-basic" type="button"
                        class="hs-dropdown-toggle py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-sm font-semibold ">
                        <DotsVerticalIcon size="22" class="hs-dropdown-open:rotate-180 text-grey100" />
                    </button>
                    <div class="shadow bg-surface hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 mt-2  shadow-md rounded-lg p-2 "
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

            <div class="grid grid-cols-12 w-full gap-6 pt-7">
                <div class="xl:col-span-7 col-span-12">
                    <apexchart type="bar" class="profit-expense" height="300" :options="chartOptions"
                        :series="chartOptions.series"> </apexchart>
                </div>
                <div class="xl:col-span-5 col-span-12 ">
                    <div class="flex items-center gap-4 mb-6 pb-3">
                        <div class="bg-lighterror rounded-full flex items-center justify-center h-10 w-10">
                            <img src="@/assets/images/svgs/biology.svg" height="24" width="24">
                        </div>
                        <div>
                            <h5 class="text-lg font-semibold">$63,489.50</h5>
                            <h6 class="text-sm text-grey100">Total Earnings</h6>
                        </div>
                    </div>
                    <div class="flex items-center gap-4  mb-6 pb-3">
                        <div class="bg-lightinfo rounded-full flex items-center justify-center h-10 w-10">
                            <img src="@/assets/images/svgs/erase.svg" height="24" width="24">
                        </div>
                        <div>
                            <h5 class="text-lg font-semibold">$48,820.00 <span
                                    class="text-xs font-normal text-success">23%</span></h5>
                            <h6 class="text-sm text-grey100">Profit this year </h6>
                        </div>
                    </div>
                    <div class="flex items-center gap-4  mb-6 pb-3">
                        <div class="bg-lightsecondary rounded-full flex items-center justify-center h-10 w-10">
                            <img src="@/assets/images/svgs/globe.svg" height="24" width="24">
                        </div>
                        <div>
                            <h5 class="text-lg font-semibold">$103,582.50</h5>
                            <h6 class="text-sm text-grey100">Overall earnings</h6>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button type="button" class="rounded-full bg-primary">View Full Report</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style type="text/css">
.profit-expense .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path {
    clip-path: inset(0 0 5% 0 round 20px);
}
</style>