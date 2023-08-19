import { ref } from "vue";
import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filters", () => {
  const filters = ref([]);

  const clearFilters = () => {
    filters.value = [];
  };

  const addFilter = (filter) => {
    if (filters.value.some((f) => f.name === filter.name)) {
      return;
    }

    filters.value.push(filter);
  };

  const removeFilter = (filterName) => {
    const index = filters.value.findIndex((f) => f.name === filterName);
    filters.value.splice(index, 1);
  };

  return { filters, clearFilters, addFilter, removeFilter };
});
