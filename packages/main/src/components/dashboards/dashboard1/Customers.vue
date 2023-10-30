<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: 'monthly earnings',
                color: getPrimary.value,
                data: [25, 66, 20, 40, 12, 30],
            },
        ],
        chart: {
            fontFamily: `inherit`,
            type: "area",
            height: 103,
            sparkline: {
                enabled: true,
            },
            group: 'sparklines',

        },

        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.05,
                opacityTo: 0,
                stops: [20, 180],
            },
        },


        markers: {
            size: 0,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: true,
                position: "right",
            },
            x: {
                show: false,
            },
        },
    };
});
</script>
<template>
    <div class="card">
        <div class="card-body relative">
            <div class="flex justify-between  items-center-center">
                <div>
                    <h5 class="text-lg font-semibold">
                        Customers
                    </h5>
                    <div class="text-sm text-grey100 pb-1 font-medium">Last 7 days</div>
                </div>
                <div class="text-right">
                    <h4 class="text-lg font-semibold">6,380</h4>
                    <span
                        class="outline outline-1 outline-success sidebarchip hide-menu items-center flex justify-center rounded-full text-xs  py-0.5 px-2 bg-lightsuccess text-success">+26.5%</span>
                </div>
            </div>
            <div class="mt-10 mb-sm-12 mb-8">
                <apexchart type="area" height="103" :options="chartOptions"
                    :series="chartOptions.series"> </apexchart>
            </div>
            <div class="flex items-center justify-between mb-3">
                <div class="text-sm text-grey100  font-medium">April 07 - April 14</div>
                <div class="text-sm text-grey100  font-medium">6,380</div>
            </div>
            <div class="flex items-center justify-between pb-1">
                <div class="text-sm text-grey100  font-medium">Last Week</div>
                <div class="text-sm text-grey100  font-medium">4,298</div>
            </div>
        </div>
    </div>
</template>
