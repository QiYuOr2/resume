<template>
  <part title="项目经历">
    <div class="mb-4" v-for="(item, index) in resume.project" :key="index">
      <div>
        <span>
          <strong>{{ item.title }}</strong>
          ,
        </span>
        <span>
          {{ item.keywords }}
        </span>
        <span class="float-right space-x-2">
          <span>{{ item.time.start }}</span>
          <span>~</span>
          <span>{{ item.time.end }}</span>
        </span>
      </div>
      <div>
        <span>
          相关技能：
          <span v-for="(skill, i) in item.skills" :key="i">
            {{ skill }}
            <span class="ml-1 mr-2" v-if="i !== item.skills.length - 1">,</span>
          </span>
        </span>
        <a class="float-right text-indigo-500" :href="item.link">
          {{ item.link }}
        </a>
      </div>
      <p>{{ item.abstract }}</p>
      <ul class="list-disc pl-6">
        <li v-for="(item, i) in item.kira" :key="i">{{ item }}</li>
      </ul>
    </div>
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
