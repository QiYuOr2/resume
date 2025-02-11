<script lang="ts" setup>
import { EditorType } from '~/types/editor';

const routes = [
  {
    icon: 'fluent:document-page-bottom-left-24-filled',
    type: EditorType.MARKDOWN,
    editor: true,
  },
  {
    icon: 'fluent:document-pdf-24-filled',
    type: EditorType.PDF
  }
  // {
  //   icon: 'fluent:document-yml-20-filled',
  //   type: EditorType.YAML
  //   editor: true,
  // }
];

const currentRoute = useRoute();

function print() {
  window.print();
}

function checkActive(routeType: EditorType) {
  if (currentRoute.name === 'editor') {
    return currentRoute.query.type === routeType;
  }
  return currentRoute.name === routeType;
}


const isEditor = computed(() => currentRoute.name === 'editor' || currentRoute.path.includes('editor'));
</script>

<template>
  <div class="sidebar">
    <NuxtLink v-for="route in routes" :class="['sidebar-icon', { active: checkActive(route.type) }]" :key="route.type"
      :to="route.editor ? `/editor?type=${route.type}` : route.type">
      <Icon :name="route.icon" size="32" />
    </NuxtLink>

    <div v-if="isEditor" class="sidebar__print" @click="print">
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
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

  &__print {
    cursor: pointer;
    margin-top: auto;
    margin-bottom: 20px;
    padding: 8px 8px 4px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    background-color: rgb(5, 123, 48);
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    & span {
      color: #fff;
    }

    &:hover {
      background-color: rgba(5, 123, 48, 0.421);
    }
  }
}
</style>