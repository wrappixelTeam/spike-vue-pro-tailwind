
<template>
  <div class="card">
    <div class="card-body relative">
      <h5 class="text-lg font-semibold mb-3">
        Visit From USA
      </h5>
      <div id="svgMap" ref="map" class="mt-5"></div>

      <div class="grid grid-cols-12 items-center justify-between mt-6">
        <div class="col-span-2 flex items-center">
          <h6 class="text-sm font-semibold text-grey200">LA</h6>
        </div>
        <div class="col-span-8 flex items-center">
          <div class="flex w-full h-1.5 bg-lightsecondary rounded-full overflow-hidden">
            <div class="flex flex-col justify-center overflow-hidden bg-info" role="progressbar" style="width: 28%"
              aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-span-2 flex items-center  justify-end">
          <h6 class="text-sm font-semibold text-grey200 text-right">28%</h6>
        </div>
      </div>
      <div class="grid grid-cols-12 items-center justify-between mt-6">
        <div class="col-span-2 flex items-center">
          <h6 class="text-sm font-semibold text-grey200">NY</h6>
        </div>
        <div class="col-span-8 flex items-center">
          <div class="flex w-full h-1.5 bg-lightsecondary rounded-full overflow-hidden">
            <div class="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar" style="width: 21%"
              aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-span-2 flex items-center  justify-end">
          <h6 class="text-sm font-semibold text-grey200 text-right">21%</h6>
        </div>
      </div>
      <div class="grid grid-cols-12 items-center justify-between mt-6">
        <div class="col-span-2 flex items-center">
          <h6 class="text-sm font-semibold text-grey200">KA</h6>
        </div>
        <div class="col-span-8 flex items-center">
          <div class="flex w-full h-1.5 bg-lightsecondary rounded-full overflow-hidden">
            <div class="flex flex-col justify-center overflow-hidden bg-error" role="progressbar" style="width: 18%"
              aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-span-2 flex items-center  justify-end">
          <h6 class="text-sm font-semibold text-grey200 text-right">18%</h6>
        </div>
      </div>
      <div class="grid grid-cols-12 items-center justify-between mt-6">
        <div class="col-span-2 flex items-center">
          <h6 class="text-sm font-semibold text-grey200">KA</h6>
        </div>
        <div class="col-span-8 flex items-center">
          <div class="flex w-full h-1.5 bg-lightsecondary rounded-full overflow-hidden">
            <div class="flex flex-col justify-center overflow-hidden bg-indigo" role="progressbar" style="width: 12%"
              aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-span-2 flex items-center  justify-end">
          <h6 class="text-sm font-semibold text-grey200 text-right">12%</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";
import { onMounted, ref } from "vue";
const map = ref(null);

onMounted(() => {
  new svgMap({
    targetElementID: "svgMap",
    mouseWheelZoomEnabled: false,
    hideFlag: true,
    initialZoom: 1.23,

    data: {
      data: {
        countresidents: {
          format: "{0}",
          thousandSeparator: ",",
          thresholdMax: 50000,
          thresholdMin: 1000,
        },
      },
      applyData: "countresidents",
      values: {
        AF: { countresidents: 587, color: "#4bd08b" },
        IN: { countresidents: 232, color: "#46caeb" },
        US: { countresidents: 42393, color: "#0085db" },
      },
    },
  });
});
</script>

<style lang="scss">
.svgMap-map-wrapper {
  background: transparent;
  padding-top: 70%;
  top: -20px;
}
</style>

