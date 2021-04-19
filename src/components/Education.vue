<template>
  <part title="教育经历">
    <div v-for="(item, index) in resume.education" :key="index">
      <div>
        <span class="mr-4">
          <strong>{{ item.school }}</strong>
        </span>
        <span class="mr-4">{{ item.location }}</span>
        <span class="float-right space-x-2">
          <span>{{ item.time.start }}</span>
          <span>~</span>
          <span>{{ item.time.end }}</span>
        </span>
      </div>
      <div class="flex">
        <span>{{ item.type }}，</span>
        <span>{{ item.major }}，</span>
        <span>GPA: {{ item.GPA }}</span>
        <span>{{ item.other }}</span>
      </div>
    </div>
  </part>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Part from './Part.vue';
import { ResumeInfo } from '../types/resume';

export default defineComponent({
  components: { Part },
  props: { resume: Object as PropType<ResumeInfo> },
});
</script>
