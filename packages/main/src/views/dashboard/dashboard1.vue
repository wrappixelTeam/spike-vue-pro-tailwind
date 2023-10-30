<script setup lang="ts">
import { ref } from "vue";
import CongratsCard from "@/components/dashboards/dashboard1/CongratulationsCard.vue";
import Payments from "@/components/dashboards/dashboard1/Payments.vue";
import Products from "@/components/dashboards/dashboard1/ProductsChart.vue";
import LatestDeal from "@/components/dashboards/dashboard1/LatestDeals.vue";
import Customers from "@/components/dashboards/dashboard1/Customers.vue";
import ProductsTable from "@/components/dashboards/dashboard1/ProductsTable.vue";
import VisitFromUsa from "@/components/dashboards/dashboard1/VisitFromUsa.vue";
import LatestReviews from "@/components/dashboards/dashboard1/LatestReviews.vue";
</script>

<template>
  <div class="grid grid-cols-12 gap-6 mb-6">
    <!-- Congratulation Card -->
    <div class="xl:col-span-6 col-span-12 flex items-stretch">
      <CongratsCard />
    </div>
    <div class="xl:col-span-6 col-span-12 flex items-stretch">
      <div class="grid grid-cols-12 gap-6 w-full">
        <!-- Payment Card  -->
        <div class="xl:col-span-6 col-span-12 flex items-stretch">
          <Payments />
        </div>
        <!-- Product Card -->
        <div class="xl:col-span-6 col-span-12 flex items-stretch">
          <Products />
        </div>
        <!-- LatestDeal Card -->
        <div class="xl:col-span-6 col-span-12 flex items-stretch">
          <LatestDeal />
        </div>
        <!-- Customer Card -->
        <div class="xl:col-span-6 col-span-12 flex items-stretch">
          <Customers />
        </div>
      </div>
    </div>
    <!-- Products Table  -->
    <div class="xl:col-span-8 col-span-12 flex items-stretch">
      <ProductsTable/>
    </div>
    <!-- Visit From USA  -->
    <div class="xl:col-span-4 col-span-12 flex items-stretch">
      <VisitFromUsa/>
    </div>
    <!-- Latest reviews -->
    <div class="col-span-12 flex items-stretch">
      <LatestReviews/>
    </div>
  </div>
</template>
