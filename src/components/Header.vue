<template>
  <div>
    <h1 class="text-4xl text-center mb-3">{{ resume.name }}</h1>
    <ul class="flex justify-center space-x-4">
      <li v-for="(item, index) in resume.contact" :key="index">
        <span>{{ item.label }}</span>
        <span class="ml-1 mr-2">:</span>
        <a class="text-indigo-500" :href="item.value" target="_blank">
          {{ item.value }}
        </a>
      </li>
    </ul>
    <ul class="flex justify-center space-x-4">
      <li v-for="(item, index) in resume.info" :key="index">
        <span>{{ item.label }}</span>
        <span class="ml-1 mr-2">:</span>
        <a class="text-indigo-500" :href="item.value" target="_blank">
          {{ item.value }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ResumeInfo } from '../types/resume';

export default defineComponent({
  name: 'resume-header',
  props: { resume: Object as PropType<ResumeInfo> },
});
</script>
