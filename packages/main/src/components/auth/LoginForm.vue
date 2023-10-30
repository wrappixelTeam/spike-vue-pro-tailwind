<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';

/*Social icons*/
import google from '@/assets/images/svgs/google-icon.svg';
import facebook from '@/assets/images/svgs/icon-facebook.svg';

const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const password = ref('admin123');
const username = ref('info@wrappixel.com');
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

function validate(values: any, { setErrors }: any) {
    const authStore = useAuthStore();
    return authStore.login(username.value, password.value).catch((error) => setErrors({ apiError: error }));
}
</script>

<template>
    <v-row class="flex mb-3">
        <v-col cols="6" sm="6">
            <v-btn variant="outlined" size="large" class="border text-sm text-gray200 font-semibold" block>
                <img :src="google" height="16" class="mr-2" alt="google" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>Google
            </v-btn>
        </v-col>
        <v-col cols="6" sm="6">
            <v-btn variant="outlined" size="large" class="border text-sm text-gray200 font-semibold" block>
                <img :src="facebook" width="25" height="25" class="mr-1" alt="facebook" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>FB
            </v-btn>
        </v-col>
    </v-row>
    <div class="flex items-center text-center mb-6">
        <div class="text-base w-100 px-5 font-weight-regular auth-divider relative">
            <span class="bg-surface px-5 py-3 relative text-sm text-grey100">or sign in with</span>
        </div>  
    </div>
    <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
        <label class="text-sm font-semibold pb-2 text-grey200">Username</label>
        <input
            type="text"
            v-model="username"
            :rules="emailRules"
            class="mb-8"
            required
            hide-details="auto"
        />
        <v-label class="text-sm font-semibold pb-2 text-grey200">Password</v-label>
        <input
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
            hide-details="auto"
            class="pwdInput"
        />
        <div class="flex flex-wrap items-center my-3 ml-n2">
            <v-checkbox v-model="checkbox" :rules="[(v:any) => !!v || 'You must agree to continue!']" required hide-details color="primary">
                <template v-slot:label class="">Remeber this Device</template>
            </v-checkbox>
            <div class="ml-sm-auto">
                <RouterLink to="" class="text-primary text-decoration-none text-sm opacity-1 font-medium"
                    >Forgot Password ?</RouterLink
                >
            </div>
        </div>
        <button size="large" rounded="pill" :loading="isSubmitting" color="primary" :disabled="valid" block type="submit" flat>Sign In</button>
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
    </Form>
</template>
