<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
/* Chart */
const chartOptions = computed(() => {
    return {
        series: [35],
        chart: {
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },

        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#D9D9D9",
                    strokeWidth: '85%',
                    margin: 15, // margin is in pixels
                },
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            colors: "#0085DB",
            type: 'solid',
            gradient: {
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: [''],
    };
});
</script>
<template>
    <v-card elevation="10" class="roun-">
        <v-card-text class="relative">
            <div class="d-block ">
                <div>
                    <h5 class="text-lg mb-1 font-semibold">
                        Paying vs non paying
                    </h5>
                    <div class="text-sm text-grey100 pb-1 font-medium">Last 7 days</div>
                </div>
            </div>
            <div class="my-10">
                <apexchart type="radialBar" class="paymentchart"  :options="chartOptions"
                    :series="chartOptions.series"> </apexchart>
            </div>
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                    <CircleIcon size="16" class="text-info" />
                    <div class="text-sm text-grey100  font-medium ml-1">Paying customers</div>
                </div>
                <div class="text-sm text-grey100  font-medium">26%</div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <CircleIcon size="16" class="text-grey100 text-disabled" />
                    <div class="text-sm text-grey100 font-medium ml-1">Non-paying customers</div>
                </div>
                <div class="text-sm text-grey100  font-medium">74%</div>
            </div>
        </v-card-text>
    </v-card>
</template>

