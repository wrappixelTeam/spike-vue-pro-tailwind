<script setup lang="ts">
/* user icon */
import img1 from '@/assets/images/profile/user1.jpg';
import img2 from '@/assets/images/profile/user2.jpg';
import img3 from '@/assets/images/profile/user3.jpg';
</script>
<template>
    <div class="card-no-bg bg-lightinfo md:mt-16 mt-8 relative overflow-hidden">
        <div class="md:p-10 p-6">
            <div class="text-center">
                <div class="ml-2 flex justify-center flex-row-reverse mb-5">
                    <img :src="img1" alt="avatar" class="h-11 w-11 rounded-full -ml-2 border border-surface" />
                    <img :src="img2" alt="avatar" class="h-11 w-11 rounded-full -ml-2 border border-surface"  />
                    <img :src="img3" alt="avatar" class="h-11 w-11 rounded-full -ml-2 border border-surface"  />
                </div>
                <h3 class="text-2xl font-semibold">Still have questions</h3>
                <h6 class="text-base text-grey100 font-medium mt-2">
                    Can't find the answer your're looking for ? Please chat to our friendly team.
                </h6>
                <button class="mt-6 rounded-full bg-primary">Chat with us</button>
            </div>
        </div>
    </div>
</template>
