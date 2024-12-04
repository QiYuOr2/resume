import type * as e from "monaco-editor";
import { createGlobalState, useStorage } from "@vueuse/core";
import { namespace } from "~/utils/constants";
import { micromark } from "micromark";
import { EditorType } from "~/types/editor";

export const useEditor = createGlobalState(() => {
  const editor = shallowRef<e.editor.IStandaloneCodeEditor>();

  const markdownValue = useStorage(`${namespace}/editor-md`, "");
  const yamlValue = useStorage(`${namespace}/editor-yml`, "");

  const typeToValueMap = {
    [EditorType.MARKDOWN]: markdownValue,
    [EditorType.YAML]: yamlValue,
  };

  const text = ref("");
  const rendererText = ref("");

  watch(
    markdownValue,
    (value) => {
      rendererText.value = micromark(value);
    },
    { immediate: true }
  );

  // if (text.value) {
  //   rendererText.value = micromark(text.value);
  // }

  const editorModels = ref<Record<EditorType, (value: string) => e.editor.ITextModel>>();
  function setEditor(value: e.editor.IStandaloneCodeEditor, models: Record<EditorType, (value: string) => e.editor.ITextModel>) {
    editor.value = value;
    editorModels.value = models;
  }

  function setValue(type: EditorType, value: string) {
    text.value = value;
    const typeToSetValueMap = {
      [EditorType.MARKDOWN]: () => (markdownValue.value = value),
      [EditorType.YAML]: () => (yamlValue.value = value),
    };

    typeToSetValueMap[type]();
  }

  function shouldLoadDefault(type: EditorType) {
    switch (type) {
      case EditorType.MARKDOWN:
        return !markdownValue.value;

      case EditorType.YAML:
        return !yamlValue.value;
    }
  }

  async function setDefault(type: EditorType) {
    const defaultTextMap = {
      [EditorType.MARKDOWN]: fetchDefaultMarkdown,
      [EditorType.YAML]: fetchDefaultYaml,
    };

    const value = shouldLoadDefault(type) ? await defaultTextMap[type]() : typeToValueMap[type].value;

    setValue(type, value);
    editor.value?.setModel(editorModels.value![type](value));
  }

  return { text, setEditor, setValue, rendererText, setDefault };
});
