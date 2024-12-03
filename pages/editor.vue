<script lang="ts" setup>
const editorStore = useEditor();
const isHeightFirst = ref(false);

onMounted(() => {
  isHeightFirst.value = window.screen.height > window.screen.width;

  addEventListener('resize', () => {
    isHeightFirst.value = window.screen.height > window.screen.width;
  })
});


</script>

<template>
  <div :class="['editor-page', isHeightFirst ? 'editor-page--col' : 'editor-page--row']">
    <div class="preview resume">
      <MDPreview :value="editorStore.rendererText" />
    </div>
    <div class="editor">
      <MonacoEditor />
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
</style>