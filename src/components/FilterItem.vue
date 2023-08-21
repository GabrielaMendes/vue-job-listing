<script setup>
import { useFiltersStore } from "@/stores/filters";
import IconRemove from "./icons/IconRemove.vue";

const props = defineProps({
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

const handleFilterClick = () => {
  if (!props.removable) {
    addFilter({
      name: props.item,
      category: props.category,
    });
  }
};

const handleRemove = (item) => {
  removeFilter(item);
};
</script>

<template>
  <li
    @click.prevent="handleFilterClick"
    class="rounded-md font-bold bg-light-grayish-cyan-filter text-desaturated-dark-cyan flex overflow-hidden"
    :class="{
      'cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition-hover':
        !removable,
    }"
  >
    <span class="p-2">{{ item }}</span>

    <button
      v-if="removable"
      @click.prevent="handleRemove(item)"
      class="py-2 px-3 ml-1 bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan transition-hover"
    >
      <IconRemove />
    </button>
  </li>
</template>
