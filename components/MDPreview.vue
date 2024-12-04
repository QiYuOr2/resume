<script lang="ts" setup>
import { get } from '@vueuse/core';

const props = defineProps<{
  text: Ref<string>
}>()

const previewIns = ref<HTMLElement>()

watch([() => previewIns.value, props.text], () => {
  if (previewIns.value) {
    previewIns.value.innerHTML = get(props.text)
  }
}, { immediate: true })
</script>

<template>
  <div ref="previewIns"></div>
</template>