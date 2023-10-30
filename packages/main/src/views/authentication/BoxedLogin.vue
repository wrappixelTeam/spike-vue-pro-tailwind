<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh flex justify-center items-center">
                <v-col cols="12" class="flex items-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0  mx-auto" max-width="450">
                        <v-card-item class="pa-sm-8">
                            <div class="flex justify-center mb-5"><Logo /></div>
                            <!-- <div class="text-base text-medium-emphasis text-center mb-6">Your Social Campaigns</div> -->
                            <LoginForm/>
                            <h6 class="text-sm  text-grey100 flex justify-center items-center mt-3">
                                New to Spike?
                                <v-btn class="pl-0 text-primary text-sm opacity-1 pl-2" height="auto" to="/auth/register2" variant="plain"
                                    >Create an account</v-btn
                                >
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
