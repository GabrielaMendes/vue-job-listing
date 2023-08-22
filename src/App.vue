<script setup>
import FilterItem from "./components/FilterItem.vue";
import JobCard from "@/components/JobCard.vue";
import { jobsRef } from "@/includes/firebase";
import { useFiltersStore } from "@/stores/filters";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { getDocs } from "firebase/firestore";
import PulseLoader from "./components/PulseLoader.vue";

const fireJobs = ref([]);
const getJobs = async () => {
  const snapshots = await getDocs(jobsRef);
  snapshots.forEach((document) => {
    fireJobs.value.push({
      id: document.id,
      ...document.data(),
    });
  });
};

const compareJobs = (a, b) => {
  const pointsA = a["featured"] * 2 + a["new"] * 1;
  const pointsB = b["featured"] * 2 + b["new"] * 1;

  return pointsB - pointsA;
};

const pendingRequest = ref(true);
const fetchingError = ref(false);

onMounted(async () => {
  try {
    await getJobs();
    fireJobs.value.sort(compareJobs);
  } catch {
    fetchingError.value = true;
  }

  setTimeout(() => (pendingRequest.value = false), 300);
});

const filtersStore = useFiltersStore();
const { filters } = storeToRefs(filtersStore);
const hasFilters = computed(() => filters.value.length > 0);

const filteredJobs = computed(() => {
  if (!hasFilters.value) {
    return fireJobs.value;
  }

  return fireJobs.value.filter((job) => {
    for (const filter of filters.value) {
      switch (filter.category) {
        case "role":
          if (job.role !== filter.name) return false;
          break;
        case "level":
          if (job.level !== filter.name) return false;
          break;
        case "languages":
          if (!job.languages.includes(filter.name)) return false;
          break;
        case "tools":
          if (!job.tools.includes(filter.name)) return false;
          break;
      }
    }

    return true;
  });
});
</script>

<template>
  <div class="h-full min-h-screen w-full min-w-fit bg-light-grayish-cyan-bg">
    <!-- Top bar -->
    <div class="h-[9.75rem] bg-desaturated-dark-cyan bg-top-image"></div>

    <main class="px-5 -mt-10 mx-auto w-full max-w-[1200px]">
      <!-- Filters -->
      <div
        class="card overflow-hidden min-h-[5rem] py-5 mb-16 md:mb-12 flex items-center justify-between gap-10 transition-opacity duration-300"
        :class="{ 'opacity-0': !hasFilters }"
      >
        <transition-group tag="ul" name="list" class="relative flex gap-5 flex-wrap">
          <FilterItem
            v-for="filter in filtersStore.filters"
            :key="filter.name"
            :item="filter.name"
            :category="filter.category"
            :removable="true"
          />
        </transition-group>
        <button
          @click.prevent="filtersStore.clearFilters"
          class="text-dark-grayish-cyan font-bold hover:text-desaturated-dark-cyan hover:underline transition-hover"
        >
          Clear
        </button>
      </div>

      <!-- Loader -->
      <div v-if="pendingRequest" class="text-center">
        <PulseLoader color="#5BA4A4" />
      </div>
      
      <!-- Job listings -->
      <div v-else>
        <!-- Error -->
        <div v-if="fetchingError" class="text-center mx-auto mt-16 italic">
          <p class="text-3xl text-very-dark-grayish-cyan">Unable to fetch jobs</p>
          <p class="text-2xl text-dark-grayish-cyan mt-2">Try again later</p>
        </div>

        <!-- Fetched data -->
        <transition-group
          v-else
          tag="ul"
          name="grow"
          :appear="true"
          class="relative flex flex-col justify-center"
          :class="{ 'max-md:-translate-y-10': !hasFilters }"
        >
          <li v-for="job in filteredJobs" :key="job.id" class="mb-12 md:mb-7">
            <JobCard :job="job" />
          </li>
        </transition-group>
      </div>
    </main>
  </div>
</template>

<style>
/* Transitions */
.grow-enter-from,
.grow-leave-to {
  @apply opacity-0 scale-75;
}

.grow-enter-active,
.grow-leave-active,
.grow-move {
  @apply transition-all duration-300 ease-linear;
}

.grow-leave-active {
  @apply absolute;
}

.list-enter-from {
  @apply opacity-0 translate-x-6;
}

.list-leave-to {
  @apply opacity-0;
}

.list-enter-active,
.list-leave-active,
.list-move {
  @apply transition-all duration-300 ease-linear;
}

.list-leave-active {
  @apply absolute;
}
</style>
