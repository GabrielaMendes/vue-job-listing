<script setup>
defineProps({
  job: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div
    class="relative w-full bg-white rounded-md py-8 px-12 max-md:p-7 md:flex items-center justify-between gap-10 shadow-lg"
    :class="{ 'before:featured-bar': job.featured }"
  >
    <!-- General info -->
    <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
      <img :src="job.logo" alt="Company Logo" aria-hidden="true" class="w-12 h-12 md:w-[5.5rem] md:h-[5.5rem] -mt-[3.2rem] md:mt-0" />

      <div class="flex flex-col gap-3 md:gap-2">
        <div class="flex items-center gap-2 md:gap-3">
          <h5 class="font-bold text-[0.8125rem] md:text-lg text-desaturated-dark-cyan mr-8 md:mr-3">
            {{ job.company }}
          </h5>
          <span
            v-if="job.new"
            class="uppercase font-bold text-white bg-desaturated-dark-cyan px-3 py-1 rounded-full"
            >new!</span
          >
          <span
            v-if="job.featured"
            class="uppercase font-bold text-white bg-very-dark-grayish-cyan px-3 py-1 rounded-full"
            >featured</span
          >
        </div>

        <h3
          class="cursor-pointer font-bold text-very-dark-grayish-cyan text-[0.9375rem] md:text-2xl hover:text-desaturated-dark-cyan hover:transition-hover"
        >
          {{ job.position }}
        </h3>

        <div class="flex gap-4 items-center text-dark-grayish-cyan md:text-lg">
          <p>{{ job.postedAt }}</p>
          <div class="circle-divisor"></div>
          <p>{{ job.contract }}</p>
          <div class="circle-divisor"></div>
          <p>{{ job.location }}</p>
        </div>
      </div>
    </div>

    <hr class="h-px mt-5 mb-4 bg-dark-grayish-cyan md:hidden" />

    <!-- Role, level, languages and tools -->
    <div class="flex flex-wrap">
      <div
        class="cursor-pointer p-2 rounded-md font-bold bg-light-grayish-cyan-filter text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan hover:text-white hover:transition-hover"
      >
        Frontend
      </div>
    </div>
  </div>
</template>
