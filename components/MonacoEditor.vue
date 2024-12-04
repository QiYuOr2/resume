<script lang="ts" setup>
import type * as e from 'monaco-editor';
import { EditorType } from '~/types/editor';
import { createMonaco } from '~/utils/monaco';

const props = defineProps<{
  type: EditorType
}>()

const container = ref<HTMLElement>();

const editorStore = useEditor();

async function setupEditor() {
  const editor = shallowRef<e.editor.IStandaloneCodeEditor>();
  const { monaco } = await createMonaco();

  if (container.value) {
    editor.value = monaco.editor.create(container.value, {
      wordWrap: 'on',
      value: editorStore.text.value
    });

    globalThis.addEventListener('resize', () => {
      editor.value?.layout()
    })

    editorStore.setEditor(editor.value, {
      [EditorType.MARKDOWN]: (value: string) => monaco.editor.createModel(value, 'markdown'),
      [EditorType.YAML]: (value: string) => monaco.editor.createModel(value, 'yaml')
    })

    if (!editorStore.text.value) {
      await editorStore.setDefault(props.type)
    }

    editor.value!.onDidChangeModelContent(() => {
      if (editor.value) {
        editorStore.setValue(props.type, editor.value.getValue());
      }
    })
  }
}

onMounted(() => {
  setupEditor();
});

onUnmounted(() => { });

</script>

<template>
  <div id="editor-container" ref="container"></div>
</template>

<style>
#editor-container {
  width: 100%;
  height: 100%;
}
</style>