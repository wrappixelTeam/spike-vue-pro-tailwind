<script setup lang="ts">
import { ref } from 'vue';
/*Call Components*/
import TopCards from '@/components/widgets/cards/TopCards.vue';
import CongratsCard from '@/components/widgets/cards/CongtsCard.vue';
import ProfileBoxCards from '@/components/dashboards/dashboard2/ProfileCards.vue';
import FigmaCard from "@/components/dashboards/dashboard2/FigmaCard.vue";
import UpcommingSchedule from "@/components/dashboards/dashboard2/UpcommingSchedule.vue";
import RecentTransaction from "@/components/widgets/cards/RecentTransactions.vue";
import PaymentGateway from "@/components/widgets/cards/PaymentGateway.vue";
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
const page = ref({ title: 'Cards' });
</script>
<template>
    <BaseBreadcrumb :title="page.title"></BaseBreadcrumb>
    <div class="grid grid-cols-12 gap-6 mb-6">
        <!-- Top cards -->
        <div class="col-span-12 flex items-stretch">
            <TopCards />
        </div>
        <!---Congrats Card-->
        <div class="xl:col-span-6 col-span-12 flex items-stretch">
            <CongratsCard />
        </div>
        <!---Profile / Figma Card-->
        <div class="xl:col-span-6 col-span-12 flex items-stretch">
            <div class="grid grid-cols-12 gap-6  w-full">
                <div class="xl:col-span-6 col-span-12 ">
                    <ProfileBoxCards />
                </div>
                <div class="xl:col-span-6 col-span-12 ">
                    <FigmaCard />
                </div>
            </div>
        </div>
        <!---Upcomming schedule-->
        <div class="xl:col-span-4 col-span-12 flex items-stretch">
            <UpcommingSchedule />
        </div>
        <!---UpcommingActivity-->
        <div class="xl:col-span-4 col-span-12 flex items-stretch">
            <PaymentGateway />
        </div>
        <!---Recent Transaction-->
        <div class="xl:col-span-4 col-span-12 flex items-stretch">
            <RecentTransaction />
        </div>
    </div>
</template>
