<template>
  <div class="divide-y-2 mt-4">
    <h2 class="text-2xl mb-1">{{ title }}</h2>
    <div class="pt-1">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'resume-header',
  props: {
    title: String,
  },
  setup() {
    return {};
  },
});
</script>
