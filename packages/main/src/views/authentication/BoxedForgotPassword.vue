<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
/* Reset form */
import ResetPassword from '@/components/auth/ResetForm.vue';
</script>

<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
             <v-row class="h-100vh flex justify-center items-center">
                <v-col cols="12" lg="4"  xl="5" class="flex items-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0  mx-auto" max-width="450">
                        <v-card-item class="pa-sm-8">
                            <div class="flex justify-center my-5">  <Logo /></div>
                            <p class="text-sm text-grey100 text-center text-10">
                                Please enter the email address associated with your account and We will email you a link to reset your password.
                            </p>
                            <ResetPassword/>
                            <v-btn size="large" color="lightprimary" to="/auth/login2" block class="mt-5 text-primary" rounded="pill">Back to Login</v-btn>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
