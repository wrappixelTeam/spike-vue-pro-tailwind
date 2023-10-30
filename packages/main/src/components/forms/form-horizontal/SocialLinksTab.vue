<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Twitter</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="https://twitter.com/abc" hide-details />
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Google</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="https://plus.google.com/abc" hide-details />
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Instagram</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="https://instagram.com/abc" hide-details />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6">
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Facebook</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="https://facebook.com/abc" hide-details />
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Linkedin</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="https://Linkedin.com/abc" hide-details />
                </v-col>
            </v-row>
            <v-row class="items-center mb-3">
                <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                    <v-label class="font-medium">Quora</v-label>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field color="primary" variant="outlined" type="text" placeholder="https://Quora.com/abc" hide-details />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="6" class="mt-n6">
            <v-row class="items-center">
                <v-col cols="12" sm="9" offset-sm="3">
                    <v-btn color="primary" rounded="pill">Submit</v-btn>
                    <v-btn class="bg-lighterror text-error ml-4" rounded="pill">Cancel</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
