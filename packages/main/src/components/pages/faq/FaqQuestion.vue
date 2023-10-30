<script setup lang="ts">
import { faqPage } from '@/_mockApis/components/pages/faqData';
import { ChevronDownIcon, ChevronUpIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="flex justify-center grow">
        <div class="max-w-4xl">
            <div class="text-center mb-8">
                <h3 class="text-2xl text-textSecondary font-semibold">Frequently asked questions</h3>
                <h6 class="text-base text-grey100 font-medium mt-1">Get to know more about ready-to-use admin dashboard
                    templates
                </h6>
            </div>
            <div class="hs-accordion-group bg-surface rounded-large overflow-hidden">
                <div class="hs-accordion active border-b border-borderColor"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <button
                        class="hs-accordion-toggle px-6 py-5 bg-surface text-textSecondary hs-accordion-active:bg-lightsecondary group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left "
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                        What is an Admin Dashboard?
                        <ChevronDownIcon class="h-5 w-5 hs-accordion-active:hidden block " />
                        <ChevronUpIcon class="h-5 w-5 hs-accordion-active:block hidden" />
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one "
                        class="hs-accordion-content px-6 w-full overflow-hidden transition-[height] duration-300 bg-surface"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                        <p class="text-grey100 text-sm py-6">
                            Admin Dashboard is the backend interface of a website or an application that helps to manage the
                            website s overall content and settings. It is widely used by the site owners to keep track of
                            their website, make changes to their content, and more.
                        </p>
                    </div>
                </div>

                

                <div class="hs-accordion border-b border-borderColor" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                    <button
                        class="hs-accordion-toggle px-6 py-5 bg-surface text-textSecondary hs-accordion-active:bg-lightsecondary group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left "
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                        What should an admin dashboard template include?
                        <ChevronDownIcon class="h-5 w-5 hs-accordion-active:hidden block " />
                        <ChevronUpIcon class="h-5 w-5 hs-accordion-active:block hidden" />
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                        class="hs-accordion-content hidden px-6 w-full overflow-hidden transition-[height] duration-300 bg-surface"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                        <p class="text-grey100 text-sm py-6">
                            Admin dashboard template should include user & SEO friendly design with a variety of components
                            and application designs to help create your own web application with ease. This could include
                            customization options, technical support and about 6 months of future updates.
                        </p>
                    </div>
                </div>

                <div class="hs-accordion border-borderColor" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                    <button
                        class="hs-accordion-toggle px-6 py-5 bg-surface text-textSecondary hs-accordion-active:bg-lightsecondary group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left "
                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                        Why should I buy admin templates from wrappixel?
                        <ChevronDownIcon class="h-5 w-5 hs-accordion-active:hidden block " />
                        <ChevronUpIcon class="h-5 w-5 hs-accordion-active:block hidden" />
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                        class="hs-accordion-content hidden px-6 w-full overflow-hidden transition-[height] duration-300 bg-surface"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                        <p class="text-grey100 text-sm py-6">
                            wrappixel offers high-quality templates that are easy to use and fully customizable. With over 101,801 happy customers & trusted by 10,000+ Companies. wrappixel is recognized as the leading online source for buying admin templates.
                        </p>
                    </div>
                </div>
        </div>
    </div>
</div></template>
