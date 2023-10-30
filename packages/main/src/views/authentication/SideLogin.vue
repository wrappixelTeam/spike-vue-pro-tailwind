<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<template>
    <div
        class="auth-login relative overflow-hidden flex items-center justify-content-center px-lg-16 px-sm-8 px-3 rounded-xl">
        <div class="auth-login-wrapper relative rounded-xl mx-lg-16 mx-4 mx-auto w-100">
            <v-card elevation="0" class="overflow-hidden px-sm-3">
                <v-card-item class="px-sm-8 px-3">
                    <Logo />
                    <v-row class="justify-md-space-around items-center py-md-8" >
                        <v-col cols="12" lg="5" md="6" class="d-mflex d-none">
                            <img src="@/assets/images/backgrounds/login-security.png" class="w-100"
                                alt="login-background" />
                        </v-col>
                        <v-col cols="12" lg="5" md="6">
                            <div class="mt-xl-0 mt-5 mw-100">
                                <h2 class="text-3xl font-bold mb-2">Welcome to Spike Admin</h2>
                                <div class="text-base mb-6 font-medium mt-3 mb-8">Your Admin Dashboard</div>
                                <LoginForm />
                                <h6 class="text-sm  text-grey100 flex items-center mt-6 font-medium">
                                    New to Spike?
                                    <v-btn class="pl-0 text-primary text-sm opacity-1 pl-2 font-medium"
                                        height="auto" to="/auth/register" variant="plain">Create an account</v-btn>
                                </h6>
                            </div>
                        </v-col>
                    </v-row>
            </v-card-item>
        </v-card>
    </div>
</div>
</template>
