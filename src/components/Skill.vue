<template>
  <part title="技能清单">
    <ul class="list-disc pl-6">
      <li v-for="(item, i) in resume.skill" :key="i">{{ item }}</li>
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
