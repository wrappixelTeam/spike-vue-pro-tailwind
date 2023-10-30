<script setup lang="ts">
import { ref } from 'vue';
import { CircleIcon } from 'vue-tabler-icons';
import { recentTransaction } from '@/_mockApis/components/widget/card';
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="card">
        <div class="card-body relative overflow-hidden">
            <h5 class="text-lg mb-1 font-semibold">
                Recent Transactions
            </h5>
            <div class="recent-transaction mt-16 px-3">
                <div v-for="list in recentTransaction" :key="list.title">
                    <div class="grid grid-cols-12 gap-3 mb-4">
                        <div class="xl:col-span-3 col-span-3 px-0 pt-0 pb-1 text-right">
                            <h6 class="text-sm text-grey200 text-no-wrap font-medium pr-2">{{ list.title }}</h6>
                        </div>
                        <div class="xl:col-span-1 col-span-1 px-0 pt-0 pb-1 text-center">
                            <CircleIcon size="13" stroke-width="2" :class="'text-' + list.textcolor" />
                            <div v-if="list.line" class="line mx-auto bg-borderColor"></div>
                        </div>
                        <div class="sm:col-span-8 col-span-7 px-0 pt-0 pb-1 text-left">
                            <h6 v-if="list.boldtext" class="text-sm text-grey200 font-bold">{{ list.subtitle }}</h6>
                            <h6 v-else class="text-sm text-grey200 font-medium">{{ list.subtitle }}</h6>
                            <div class="mt-n1">
                                <RouterLink :to="list.url" class="text-sm text-primary text-decoration-none"
                                    v-if="list.link">{{
                                        list.link
                                    }}
                                    </RouterLink>
                            </div>
                        </div>
                        <!-- <v-col cols="3" sm="3" class="px-0 pt-0 pb-1 text-right">
                            <h6 class="text-sm text-grey200 text-no-wrap font-medium pr-2">{{ list.title }}</h6>
                        </v-col> -->
                        <!-- <v-col cols="1" sm="1" class="px-0 text-center pt-0 pb-1 mt-n1">
                            <CircleIcon size="13" stroke-width="2" :class="'text-' + list.textcolor" />
                            <div v-if="list.line" class="line mx-auto bg-borderColor"></div>
                        </v-col> -->
                        <!-- <v-col cols="7" sm="8" class="pt-0 pb-1">
                            <h6 v-if="list.boldtext" class="text-sm text-grey200 font-bold">{{ list.subtitle }}</h6>
                            <h6 v-else class="text-sm text-grey200 font-medium">{{ list.subtitle }}</h6>
                            <div class="mt-n1">
                                <RouterLink :to="list.url" class="text-sm text-primary text-decoration-none"
                                    v-if="list.link">{{
                                        list.link
                                    }}</RouterLink>
                            </div>
                        </v-col> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@media screen and (max-width:1100px) and (min-width:1024px) {
    .recent-transaction {
        max-width: 40%;
    }
}

@media screen and (max-width:991px) and (min-width:767px) {
    .recent-transaction {
        max-width: 60%;
    }
}
.recent-transaction .line {
    width: 1px;
    height: 35px;
    top: 10px;
    position: relative;
}
</style>