<script lang="ts" setup>
import { get } from '@vueuse/core';
import yaml from 'js-yaml'

const props = defineProps<{
  text: Ref<string>
}>()

watchEffect(() => {
  const text = get(props.text)
  if (text) {
    console.log(yaml.load(text))
  }
})
</script>

<template>
  <div class="yml-preview"></div>
</template>