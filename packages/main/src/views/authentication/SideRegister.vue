<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
/* Register form */
import RegisterForm from '@/components/auth/RegisterForm.vue';
</script>

<template>
    <div class="pa-3">
        <v-row class="h-100vh mh-100 auth">
            <v-col cols="12" lg="7" xl="8"
                class="d-lg-flex items-center justify-center authentication relative">
                <div class="auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0">
                    <div class="relative">
                        <Logo />
                    </div>
                </div>
                <div class="">
                    <img src="@/assets/images/backgrounds/login-bg.svg" height="450" class="relative d-none d-lg-flex"
                        alt="login-background" />
                </div>
            </v-col>
            <v-col cols="12" lg="5" xl="4" class="flex items-center justify-center bg-surface">
                <div class="mt-xl-0 mt-5 mw-100" >
                    <h2 class="text-2xl font-semibold mb-2">Welcome to Spikeadmin</h2>
                    <div class="text-sm mb-6">Your Admin Dashboard</div>
                    <RegisterForm />
                    <h6 class="text-sm  text-grey100 flex items-center mt-6">
                        Already have an Account?
                        <v-btn variant="plain" to="/auth/login" class="text-primary text-sm opacity-1 pl-2">Sign
                            In</v-btn>
                    </h6>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
