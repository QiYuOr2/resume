<script setup lang="ts">
import { useDropZone, useFileDialog } from '@vueuse/core'

useHead({
  title: '简历编辑器 | PDF 元数据修改',
})

const currentFileName = ref('')

const { load, metaData, download } = usePDF()


const fileDrop = ref<HTMLDivElement>()
useDropZone(fileDrop, {
  onDrop: (files) => loadPDF(files?.[0]),
  dataTypes: ['application/pdf'],
  multiple: false,
  preventDefaultForUnhandled: false,
})
const { open, onChange } = useFileDialog({
  accept: '.pdf',
})

onChange((files) => loadPDF(files?.[0]))

function loadPDF(file?: File) {
  if (!file) return

  currentFileName.value = file.name;
  load(file);
}

</script>

<template>
  <div class="pdf">
    <div ref="fileDrop" class="upload-area" @click="open()">
      <Icon name="fluent:arrow-upload-16-filled" />
      <p>拖拽 PDF 文件于此</p>
    </div>

    <div v-if="currentFileName" class="files">
      <div class="file-item">
        <Icon name="fluent:document-one-page-link-24-filled" size="28" />
        <span>{{ currentFileName }}</span>
      </div>
    </div>

    <div v-if="metaData" class="metadata">
      <template v-for="item in metaData">
        <label v-if="item.value || item.show" class="data-item">
          <span class="data-item__label">{{ item.label }}</span>
          <input v-if="item.enableEdit" v-model="item.value" />
          <span v-else>{{ item.value }}</span>
        </label>
      </template>

      <div class="metadata__save">
        <button @click="download(currentFileName)">保存并下载</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pdf {
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  padding: 14px;
  overflow-y: auto;

  .upload-area {
    width: 600px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1.4px dashed #000;
    border-radius: 8px;
    cursor: pointer;

    p {
      font-size: 14px;
      color: #666;
    }
  }

  .files {
    box-sizing: border-box;
    width: 600px;
    margin: 12px 0;
    padding: 12px;
    border-radius: 6px;
    background-color: rgba(5, 123, 48, 0.059);

    .file-item {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-size: 1.2rem;
        color: rgb(23, 54, 34);
      }
    }
  }

  .metadata {
    box-sizing: border-box;
    width: 600px;
    padding: 14px;
    border: 1.4px solid rgba(23, 54, 34, 0.795);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .data-item {
      display: block;
      margin-bottom: 12px;

      &__label {
        display: block;
        font-weight: bold;
        margin-bottom: 4px;
      }

      input {
        box-sizing: border-box;
        width: 100%;
        padding: 4px;
        font-size: 1.2rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }

    &__save {
      display: flex;
      justify-content: flex-end;
      margin-top: 12px;

      button {
        padding: 8px 16px;
        font-size: 1.2rem;
        background-color: rgb(5, 123, 48);
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all .2s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: rgba(5, 123, 48, 0.421);
          transition: all .2s;
        }
      }
    }
  }
}
</style>