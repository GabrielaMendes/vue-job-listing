<script setup>
defineProps({
  item: {
    required: true,
    type: String,
  },
  removable: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="cursor-pointer p-2 rounded-md font-bold  bg-light-grayish-cyan-filter text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan hover:text-white hover:transition-hover"
  >
    {{ item }}
  </div>
</template>
