<script setup>
import { computed, ref } from "vue";
import { ref as storageRef } from "firebase/storage";
import { storage } from "@/includes/firebase";
import { useStorageFile } from "vuefire";
import FilterItem from "./FilterItem.vue";

const props = defineProps({
  job: {
    required: true,
    type: Object,
  },
});

const fileRef = storageRef(storage, `companies-logo/${props.job.logo}`);
const { url } = useStorageFile(fileRef);

const loaded = ref(false);
const onLoaded = () => {
  loaded.value = true;
};

const showImg = computed(() => url.value && loaded.value);
</script>

<template>
  <div
    class="relative card min-w-fit rounded-md md:flex items-center justify-between gap-10"
    :class="{ 'before:featured-bar': job.featured }"
  >
    <!-- General info -->
    <div class="shrink-0 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
      <transition name="grow">
        <img
          v-show="showImg"
          @load="onLoaded"
          :src="url"
          alt="Company Logo"
          aria-hidden="true"
          class="w-12 h-12 md:w-[5.5rem] md:h-[5.5rem] -mt-[3.2rem] md:mt-0"
        />
      </transition>
      <div
        v-if="!showImg"
        class="bg-slate-200 animate-pulse w-12 h-12 md:w-[5.5rem] md:h-[5.5rem] rounded-full -mt-[3.2rem] md:mt-0"
      ></div>

      <div class="flex flex-col gap-3 md:gap-2">
        <div class="flex items-center gap-2 md:gap-3">
          <h5
            class="font-bold text-[0.8125rem] md:text-lg text-desaturated-dark-cyan mr-3 xs:mr-8 md:mr-3"
          >
            {{ job.company }}
          </h5>
          <div class="flex gap-2">
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
        </div>

        <h3
          class="cursor-pointer font-bold text-very-dark-grayish-cyan text-[0.9375rem] md:text-2xl hover:text-desaturated-dark-cyan hover:transition-hover"
        >
          {{ job.position }}
        </h3>

        <div class="flex gap-4 max-xs:gap-2 items-center text-dark-grayish-cyan md:text-lg">
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
    <ul class="flex gap-5 flex-wrap md:justify-end">
      <FilterItem :item="job.role" category="role" />
      <FilterItem :item="job.level" category="level" />
      <FilterItem
        v-for="language in job.languages"
        :key="language"
        :item="language"
        category="languages"
      />
      <FilterItem v-for="tool in job.tools" :key="tool" :item="tool" category="tools" />
    </ul>
  </div>
</template>
