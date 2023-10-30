<template>
    <div class="mt-sm-13 mt-8">
        <v-label class="text-sm font-medium pb-2 text-lightText">Type your 6 digits security code</v-label>
        <div class="flex justify-between gap-3 mb-2 verification">
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
        </div>
        <v-btn color="primary" size="large" block flat>Verify My Account</v-btn>
        <h6 class="text-base mt-5 font-weight-regular">
            Didn't get the code?
            <RouterLink to="/" class="text-primary text-sm text-decoration-none pl-1 font-medium"> Resend</RouterLink>
        </h6>
    </div>
</template>