<script setup>
import { useFiltersStore } from "@/stores/filters";
import IconRemove from "./icons/IconRemove.vue";

defineProps({
  item: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  removable: {
    type: Boolean,
    default: false,
  },
});

const { addFilter, removeFilter } = useFiltersStore();
</script>

<template>
  <div
    @click.prevent="!removable && addFilter({ name: item, category: category })"
    class="rounded-md font-bold bg-light-grayish-cyan-filter text-desaturated-dark-cyan flex overflow-hidden"
    :class="{
      'cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition-hover':
        !removable,
    }"
  >
    <span class="p-2">{{ item }}</span>

    <button
      v-if="removable"
      @click.prevent="removeFilter(item.name)"
      class="py-2 px-3 ml-1 bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan transition-hover"
    >
      <IconRemove />
    </button>
  </div>
</template>
