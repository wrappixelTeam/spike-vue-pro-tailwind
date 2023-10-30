<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
/* Register form */
import RegisterForm from '@/components/auth/RegisterForm.vue';
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
                            <RegisterForm />
                            <h6 class="text-sm  text-grey100 flex justify-center items-center mt-3">
                                Already have an Account?
                                <v-btn variant="plain" to="/auth/login2" class="text-primary text-sm opacity-1 pl-2">Sign In</v-btn>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
