<script lang="ts" setup>
import { EditorType } from '~/types/editor';

const editorStore = useEditor();
const isHeightFirst = ref(false);

function checkHeightAndWidth() {
  isHeightFirst.value = window.screen.height > window.screen.width;
}

onMounted(() => {
  checkHeightAndWidth();

  addEventListener('resize', checkHeightAndWidth);
});

onUnmounted(() => {
  removeEventListener('resize', checkHeightAndWidth);
});

const currentRoute = useRoute();
watch(() => currentRoute.query.type, (value) => {
  editorStore.setDefault(value as EditorType)
})
</script>

<template>
  <div :class="['editor-page', isHeightFirst ? 'editor-page--col' : 'editor-page--row']">
    <div class="preview resume">
      <MDPreview v-if="EditorType.MARKDOWN === currentRoute.query.type" :text="editorStore.rendererText"></MDPreview>
      <YMLPreview v-else :text="editorStore.text"></YMLPreview>
    </div>
    <div class="editor">
      <MonacoEditor :type="(currentRoute.query.type as EditorType)"></MonacoEditor>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/styles/resume.scss";

.editor-page {
  display: flex;
  gap: 1px;
  height: 100vh;
  width: 100%;
  background: rgb(0, 0, 0);
  overflow: hidden;

  .preview,
  .editor {
    flex: 1;
    background-color: #fff;
  }

  .preview {
    overflow-y: scroll;
  }

  &--col {
    flex-direction: column;

    .preview,
    .editor {
      max-height: 50%;
    }
  }

  &--row {
    flex-direction: row;

    .preview,
    .editor {
      max-width: 50%;
    }
  }
}

@media print {
  .editor-page {
    height: unset;

    & .preview {
      width: unset;
      height: unset;
      max-width: unset;
      max-height: unset;
      overflow-y: unset;
    }

    .editor {
      display: none;
    }
  }
}
</style>