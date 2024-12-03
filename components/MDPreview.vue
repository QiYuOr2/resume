<script lang="ts" setup>
import { get } from '@vueuse/core';

const props = defineProps<{
  value: string | Ref<string>
}>()

const previewIns = ref<HTMLElement>()


watch([previewIns, () => props.value], () => {
  if (previewIns.value) {
    previewIns.value.innerHTML = get(props.value)
  }
}, { immediate: true })
</script>

<template>
  <div ref="previewIns"></div>
</template>