<script setup>
import JobCard from "@/components/JobCard.vue";
import useJobs from "@/composables/useJobs";
import { useFiltersStore } from "@/stores/filters";
import FilterItem from "./components/FilterItem.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { jobs } = useJobs();

const filtersStore = useFiltersStore();
const { filters } = storeToRefs(filtersStore);
const hasFilters = computed(() => filters.value.length > 0);
</script>

<template>
  <div class="h-full min-h-screen w-full min-w-fit bg-light-grayish-cyan-bg">
    <!-- Top bar -->
    <div class="h-[9.75rem] bg-desaturated-dark-cyan bg-top-image"></div>

    <main 
      class="px-5 mx-auto w-full max-w-[1200px]"
      :class="hasFilters ? '-mt-10' : 'mt-16 md:mt-[5.5rem]'"  
    >
      <!-- Filters -->
      <div
        v-show="hasFilters"
        class="card py-5 mb-16 md:mb-12 flex items-center justify-between gap-10"
      >
        <div class="flex gap-5 flex-wrap">
          <FilterItem
            v-for="filter in filtersStore.filters"
            :key="filter.name"
            :item="filter.name"
            :category="filter.category"
            :removable="true"
          />
        </div>
        <button
          @click.prevent="filtersStore.clearFilters"
          class="text-dark-grayish-cyan font-bold hover:text-desaturated-dark-cyan hover:underline transition-hover"
        >
          Clear
        </button>
      </div>

      <!-- Job listings -->
      <ul>
        <li v-for="job in jobs" :key="job.id" class="mb-12 md:mb-7">
          <JobCard :job="job" />
        </li>
      </ul>
    </main>
  </div>
</template>
