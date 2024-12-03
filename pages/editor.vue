<script lang="ts" setup>
const editorStore = useEditor();
const isHeightFirst = ref(false);
const editorFlexDirection = computed(() => isHeightFirst.value ? 'column' : 'row')


onMounted(() => {
  isHeightFirst.value = window.screen.height > window.screen.width;
});
</script>

<template>
  <div class="editor-page">
    <div class="preview resume">
      <MDPreview :value="editorStore.rendererText" />
    </div>
    <div class="editor">
      <MonacoEditor />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.editor-page {
  display: flex;
  flex-direction: v-bind('editorFlexDirection');
  gap: 1px;
  height: 100vh;
  width: 100%;
  background: rgb(0, 0, 0);
  overflow: hidden;

  .preview,
  .editor {
    flex: 1;
    background-color: #fff;
    max-height: 50%;
  }

  .preview {
    overflow-y: scroll;
  }
}
</style>