<script setup lang="ts">
import { CertificateIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="pt-sm-16">
        <div class="pt-8">
            <v-container class="maxWidth">
                <v-card elevation="0" class="bg-grey200 build-app position-realtive overflow-visible">
                    <v-card-item class="pb-md-8 pb-0">
                        <v-row class="justify-between">
                            <v-col cols="12" md="6" class="text-md-left text-center">
                                <h2 class="text-h1 text-white lh-md">Build your app with our highly customizable Dashboard
                                </h2>
                                <div class="flex justify-md-start justify-center mt-4 ">
                                    <CertificateIcon stroke-width="1.5" class="mr-2" />
                                    <span class="text-lg text-white font-weight-regular">100% moneyback guarantee</span>
                                </div>

                                <div class="mt-sm-10 mt-6">
                                    <v-btn class="m-btn-full px-6" color="primary" rounded="pill" size="large"
                                        target="_blank" to="/auth/login" flat>Purchase Now</v-btn>
                                </div>
                                <img src="@/assets/images/landingpage/background/school.png" class="d-md-none d-block w-100"/>
                            </v-col>

                        </v-row>
                    </v-card-item>
                </v-card>
            </v-container>
        </div>
    </div>
</template>
