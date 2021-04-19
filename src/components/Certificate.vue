<template>
  <part title="奖项证书">
    <ul class="list-disc pl-6">
      <li v-for="(item, i) in resume.certificate" :key="i">{{ item }}</li>
    </ul>
  </part>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ResumeInfo } from '../types/resume';
import Part from './Part.vue';

export default defineComponent({
  components: { Part },
  props: { resume: Object as PropType<ResumeInfo> },
});
</script>
