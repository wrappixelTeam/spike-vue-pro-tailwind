<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getLight100, getWarning, getError } from '@/utils/UpdateColors';
import { CircleIcon, DotsVerticalIcon } from 'vue-tabler-icons';
const items = ref([
    { title: "Action" },
    { title: "Another action" },
    { title: "Something else here" },
]);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [5368, 3319, 3500, 4106],
        labels: ["5368", "Direct Traffic", "Refferal Traffic", "Oragnic Traffic"],
        chart: {
            height: 280,
            type: "donut",
            fontFamily: `inherit`,
            foreColor: "#c6d1e9",
            offsetX: -15,
        },

        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },

        colors: [getLight100.value, getWarning.value, getError.value, getPrimary.value],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },

        stroke: {
            show: false,
        },

        plotOptions: {
            pie: {
                donut: {
                    size: "75%",
                    background: "none",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "18px",
                            color: undefined,
                            offsetY: 5,
                        },
                        value: {
                            show: false,
                            color: "#98aab4",
                        },
                    },
                },
            },
        },
    };
});

</script>
<template>
    <div class="card relative overflow-hidden pb-7">
        <div class="card-body">
            <div class="flex items-center justify-between">
                <h5 class="text-lg mb-1 font-semibold">Traffic Distribution</h5>
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

            <div class="grid grid-cols-12 w-full gap-6 pt-7 items-center">
                <div class="xl:col-span-7 col-span-12">
                    <apexchart type="donut" height="280" :options="chartOptions" :series="chartOptions.series"> </apexchart>
                </div>
                <div class="xl:col-span-5 col-span-12 ">
                    <div class="flex mb-6 pb-3">
                        <CircleIcon stroke-width="1.5" size="18" class="text-primary" />
                        <div class="ml-2 -mt-1">
                            <h5 class="text-lg flex font-semibold">4,106<span
                                    class="text-xs text-success font-normal ml-1 pt-2">+23%</span></h5>
                            <h6 class="text-sm text-grey100">Oragnic Traffic</h6>
                        </div>
                    </div>
                    <div class="flex mb-6 pb-3">
                        <CircleIcon stroke-width="1.5" size="18" class="text-error" />
                        <div class="ml-2 -mt-1">
                            <h5 class="text-lg font-semibold">3,500</h5>
                            <h6 class="text-sm text-grey100">Refferal Traffic</h6>
                        </div>
                    </div>
                    <div class="flex">
                        <CircleIcon stroke-width="1.5" size="18" class="text-warning" />
                        <div class="ml-2 -mt-1">
                            <h5 class="text-lg font-semibold">3,319</h5>
                            <h6 class="text-sm text-grey100">Direct Traffic</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
