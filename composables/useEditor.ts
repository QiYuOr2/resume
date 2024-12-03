import type * as e from "monaco-editor";
import { createGlobalState, useStorage } from "@vueuse/core";
import { namespace } from "~/utils/constants";
import { micromark } from "micromark";

export const useEditor = createGlobalState(() => {
  const editor = shallowRef<e.editor.IStandaloneCodeEditor>();
  const text = useStorage(`${namespace}/editor-value`, "");
  const rendererText = ref("");

  watch(
    text,
    (value) => {
      rendererText.value = micromark(value);
    },
    { immediate: true }
  );

  if (text.value) {
    rendererText.value = micromark(text.value);
  }

  function setEditor(value: e.editor.IStandaloneCodeEditor) {
    editor.value = value;
  }

  function setValue(value: string) {
    text.value = value;
  }

  return { text, setEditor, setValue, rendererText };
});
