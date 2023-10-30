<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getLight100,getWarning,getError } from '@/utils/UpdateColors';
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
            height: 250,
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
                    size: "68%",
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
    <v-card elevation="10">
        <v-card-item>
            <div class="flex items-center justify-between">
                <div>
                    <h5 class="text-lg mb-1 font-semibold">Traffic Distribution</h5>
                </div>
                <div>
                    <v-menu bottom left>
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props" flat>
                                <DotsVerticalIcon stroke-width="1.5" size="24" class="text-grey100" />
                            </v-btn>
                        </template>
                        <v-list density="compact">
                            <v-list-item v-for="(item, i) in items" :key="i" :value="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>

            <v-row class="d-sm-flex items-center mt-5">
                <v-col cols="12" lg="7" sm="5">
                    <apexchart type="donut" height="250" :options="chartOptions" :series="chartOptions.series"> </apexchart>
                </v-col>
                <v-col cols="12" lg="5" sm="7">
                    <div class="flex mb-6 pb-3">
                        <CircleIcon  stroke-width="1.5" size="18" class="text-primary"/>
                        <div class="ml-2 mt-n1">
                            <h5 class="text-lg flex font-semibold">4,106<span
                                    class="text-xs text-success ml-1 pt-2">+23%</span></h5>
                            <h6 class="text-sm text-grey100">Oragnic Traffic</h6>
                        </div>
                    </div>
                    <div class="flex mb-6 pb-3">
                        <CircleIcon  stroke-width="1.5" size="18" class="text-error"/>
                        <div class="ml-2 mt-n1">
                            <h5 class="text-lg font-semibold">3,500</h5>
                            <h6 class="text-sm text-grey100">Refferal Traffic</h6>
                        </div>
                    </div>
                    <div class="flex">
                        <CircleIcon  stroke-width="1.5" size="18" class="text-warning"/>
                        <div class="ml-2 mt-n1">
                            <h5 class="text-lg font-semibold">3,319</h5> 
                            <h6 class="text-sm text-grey100">Direct Traffic</h6>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
