<script lang="ts" setup>
import { EditorType } from '~/types/editor';

const routes = [
  {
    icon: 'file-icons:rmarkdown',
    type: EditorType.MARKDOWN
  },
  {
    icon: 'file-icons:yaml-alt4',
    type: EditorType.YAML
  }
];

const currentRoute = useRoute();

function print() {
  window.print();
}
</script>

<template>
  <div class="sidebar">
    <NuxtLink v-for="route in routes" :class="['sidebar-icon', { active: currentRoute.query.type === route.type }]"
      :to="`/editor?type=${route.type}`">
      <Icon :name="route.icon" size="24" />
    </NuxtLink>

    <div class="sidebar-print" @click="print">
      <Icon name="file-icons:default" />
      <span>打印</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 68px;
  padding: 10px 0;
  background-color: #fff;
  border-right: 1px solid #000;
  text-align: center;

  &-icon {
    width: 100%;
    padding: 20px 0;
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      .iconify {
        color: rgb(5, 123, 48);
        transition: all 0.2s;
      }
    }

    &:hover {
      transition: all 0.2s;
      background-color: rgba(0, 0, 0, 0.025);

      .iconify {
        transition: all 0.2s;
        color: rgba(5, 123, 48, 0.421);
      }
    }
  }

  &-print {
    cursor: pointer;
    margin-top: auto;
    margin-bottom: 20px;
    padding: 8px 6px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    background-color: rgb(5, 123, 48);
    transition: all 0.2s;

    & span {
      color: #fff;
    }

    &:hover {
      background-color: rgba(5, 123, 48, 0.421);
    }
  }
}
</style>