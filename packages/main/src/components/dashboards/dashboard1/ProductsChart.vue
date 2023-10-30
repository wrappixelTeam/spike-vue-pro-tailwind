<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
/* Chart */
const chartOptions = computed(() => {
    return {
        series: [70, 18, 12],
        labels: ["2022", "2021", "2020"],
        chart: {
            height: 170,
            type: "donut",
            fontFamily: `inherit`,
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '85%',
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: [getPrimary.value, "#FB977D", "#5AC8FA"],

        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };
});
</script>
<template>
    <div class="card">
        <div class="card-body relative">
            <div class="flex justify-between items-center">
                <div>
                    <h5 class="text-lg font-semibold">
                        Products
                    </h5>
                    <div class="text-sm text-grey100 pb-1 font-medium">Last 7 days</div>
                </div>
                <div class="text-right">
                    <h4 class="text-lg font-semibold">432</h4>
                    <span
                        class="outline outline-1 outline-success sidebarchip hide-menu items-center flex justify-center rounded-full text-xs  py-0.5 px-2 bg-lightsuccess text-success">-3.8%</span>
                </div>
            </div>
            <div class="my-7">
                <apexchart type="donut" class="paymentchart" height="170" :options="chartOptions"
                    :series="chartOptions.series"> </apexchart>
            </div>
            <p class="text-sm text-grey100 font-medium text-center pb-1">$18k Profit more than last month</p>
        </div>
    </div>
</template>
