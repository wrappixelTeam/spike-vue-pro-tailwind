<script setup lang="ts">
import { ref } from 'vue';
import { pricing } from '@/_mockApis/components/pages/pricingData';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
/* Switch monthly/yearly pricing */
const priceplan = ref(false);
// theme breadcrumb
const page = ref({ title: 'Pricing' });
</script>

<template>
    <BaseBreadcrumb :title="page.title"></BaseBreadcrumb>
    <h2 class="text-3xl font-bold text-center pt-10">
        Flexible Plans Tailored to Fit Your<br /> Community's
        Unique Needs!
    </h2>
    <div class="justify-center mt-1 mb-12">
        <div class="flex gap-4 mt-5 items-center justify-center">
            <label class="text-sm font-medium text-textSecondary">Monthly</label>
            <input type="checkbox" id="hs-basic-usage" v-model="priceplan"
                class="relative  w-[3.25rem] h-7 bg-secondary checked:bg-none checked:bg-lightprimary  rounded-full cursor-pointer transition-colors ease-in-out duration-200   ring-offset-white focus:outline-none appearance-none
before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
            <label class="text-sm font-medium text-textSecondary">Yearly</label>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-6 ">
        <div class="xl:col-span-4 col-span-12 flex items-stretch" v-for="card in pricing" :key="card.caption">
            <div class="card relative overflow-hidden">
                <div class="card-body ">
                    <div class="flex justify-between">
                        <h4 class="text-xs text-grey100 font-semibold uppercase" v-text="card.caption"></h4>
                        <span class="rounded-full absolute right-7  font-bold bg-lightwarning text-warning py-1 text-center text-xs px-2"
                            v-if="card.tagtext">POPULAR</span>
                    </div>
                    <img :src="card.image" class="h-[70px] my-5" alt="icon" />
                    <div v-if="card.free" class="flex items-center mt-4">
                        <h2 class="text-[44px] font-bold text-textSecondary">Free</h2>
                    </div>
                    <div v-else class="flex items-center mt-4">
                        <sup class="text-base mt-n3 pr-2 text-textSecondary">$</sup>
                        <h2 v-if="priceplan" class="text-[44px] font-bold text-textSecondary">{{ card.yearlyprice }}</h2>
                        <h2 v-else class="text-[44px] font-bold text-textSecondary">{{ card.price }}</h2>
                        <span v-if="priceplan" class="text-grey200 font-medium mt-4 ml-2">/yr</span>
                        <span v-else class="text-grey200 font-medium mt-4 ml-2">/mo</span>
                    </div>
                    <ul class="mb-0 pl-0 bg-transparent pt-5">
                        <li class="px-0 mb-5" v-for="desc in card.list" :key="desc.listtitle">
                            <span v-if="desc.status" class="text-sm flex items-center font-medium text-grey200 opacity-60">
                                <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="2" size="18"
                                    class="mr-4" />
                                {{ desc.listtitle }}
                            </span>
                            <span v-else class="text-sm flex items-center font-medium text-textSecondary">
                                <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="2" size="18"
                                    class="mr-4" />
                                {{ desc.listtitle }}
                            </span>
                        </li>
                    </ul>
                    <button  size="large" class="mt-6 bg-primary rounded-full w-full" >{{ card.buttontext }}</button>
                </div>
            </div>
        </div>

    </div>
</template>
