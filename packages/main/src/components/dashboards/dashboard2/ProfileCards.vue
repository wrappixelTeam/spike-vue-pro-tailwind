<template>
    <div class="card-no-bg relative overflow-hidden">
        <div class="card-body bg-lightprimary">
            <img src="@/assets/images/svgs/info-shap.svg" alt="shape" class="absolute top-0 right-0">
            <div class="bg-info rounded-full flex items-center justify-center h-12 w-12 mb-8">
                <img src="@/assets/images/svgs/idea.svg" height="24" width="24">
            </div>
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-base font-semibold">New Goals</h5>
                <div class="text-sm text-grey200 font-medium">83%</div>
            </div>
            <div class="flex w-full h-1.5 bg-lightsecondary rounded-full overflow-hidden">
                <div class="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar" style="width: 70%"
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    </div>
    <div class="card relative overflow-hidden mt-6">
        <div class="card-body ">
            <div class="flex justify-between">
                <img src="@/assets/images/profile/user3.jpg" class="mb-8 rounded-full h-[68px] w-[68px]" >
                <p class="text-sm font-semibold text-warning">#1 in DevOps</p>
            </div>
            <div class="">
                <h5 class="text-base font-semibold">Adam Johnson</h5>
                <div class="text-sm text-grey100">Top Developer</div>
            </div>
        </div>
    </div>
</template>
