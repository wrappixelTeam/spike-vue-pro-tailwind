<script setup lang="ts">
import { ref } from "vue";
import WelcomeCard from "@/components/dashboards/dashboard2/WelcomeCard.vue";
import TextCards from "@/components/dashboards/dashboard2/TextCards.vue";
import ProfitExpanse from "@/components/dashboards/dashboard2/ProfitExpanse.vue";
import ProductSales from "@/components/dashboards/dashboard2/ProductSales.vue";
import TraficDistribution from "@/components/dashboards/dashboard2/TrafficDistribution.vue";
import ProfileCards from "@/components/dashboards/dashboard2/ProfileCards.vue";
import FigmaCard from "@/components/dashboards/dashboard2/FigmaCard.vue";
import PayingTable from "@/components/dashboards/dashboard2/PayingTable.vue";
import UpcommingSchedule from "@/components/dashboards/dashboard2/UpcommingSchedule.vue";
</script>

<template>
  <div class="grid grid-cols-12 gap-6 mb-6">
    <div class="xl:col-span-6 col-span-12 flex items-stretch">
      <WelcomeCard />
    </div>
    <div class="xl:col-span-6 col-span-12 flex items-stretch">
      <TextCards />
    </div>
    <div class="xl:col-span-8 col-span-12 flex items-stretch">
      <ProfitExpanse />
    </div>
    <div class="xl:col-span-4 col-span-12 flex items-stretch">
      <ProductSales />
    </div>
    <div class="xl:col-span-6 col-span-12">
      <TraficDistribution/>
    </div>
    <div class="xl:col-span-6 col-span-12 flex items-stretch">
      <div class="grid grid-cols-12 gap-6  w-full">
        <div class="xl:col-span-6 col-span-12 ">
          <ProfileCards/>
        </div>
        <div class="xl:col-span-6 col-span-12 ">
          <FigmaCard/>
        </div>
      </div>
    </div>
    <div class="xl:col-span-8 col-span-12">
      <PayingTable/>
    </div>
    <div class="xl:col-span-4 col-span-12">
      <UpcommingSchedule/>
    </div>
  </div>  
</template>
