<script setup>
import useJobs from "./composables/useJobs";

const { jobs } = useJobs();
</script>

<template>
  <div class="h-full min-h-screen w-full bg-light-grayish-cyan-bg">
    <!-- Top bar -->
    <div class="h-[9.75rem] bg-desaturated-dark-cyan bg-top-image"></div>

    <!-- Job listings -->
    <main class="px-6 mx-auto mt-16 md:mt-24 w-full max-w-[1200px]">
      <ul>
        <li v-for="job in jobs" :key="job.id" class="mb-8">
        </li>
      </ul>
    </main>
  </div>
</template>
