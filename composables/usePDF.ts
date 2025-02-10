import { PDFDocument } from "pdf-lib";

export function usePDF() {
  const metaData = ref();
  const pdfDoc = ref<PDFDocument>();

  function load(file: File) {
    const reader = new FileReader();
    reader.onload = async () => {
      const pdfBytes = new Uint8Array(reader.result as ArrayBuffer);
      pdfDoc.value = await PDFDocument.load(pdfBytes);

      readMetaData();
    };
    reader.readAsArrayBuffer(file);
  }

  function readMetaData() {
    if (!pdfDoc.value) return;

    metaData.value = {
      title: { label: "标题", value: pdfDoc.value.getTitle(), enableEdit: true },
      creator: { label: "创建者", value: pdfDoc.value.getCreator() },
      author: { label: "作者", value: pdfDoc.value.getAuthor(), show: true, enableEdit: true },
      keywords: { label: "关键字", value: pdfDoc.value.getKeywords(), show: true, enableEdit: true },
      subject: { label: "主题", value: pdfDoc.value.getSubject(), show: true, enableEdit: true },
      createDate: { label: "创建时间", value: pdfDoc.value.getCreationDate()?.toLocaleString() },
      modifyDate: { label: "修改时间", value: pdfDoc.value.getModificationDate()?.toLocaleString() },
    };
  }

  function checkValueAndSet<T>(setFunc: (value: T) => void, value: T) {
    if (value) {
      setFunc(value);
    }
  }

  function updateMetaData() {
    if (!pdfDoc.value) return;

    checkValueAndSet((value) => pdfDoc.value!.setTitle(value), metaData.value.title.value);
    checkValueAndSet((value) => pdfDoc.value!.setAuthor(value), metaData.value.author.value);
    checkValueAndSet((value) => pdfDoc.value!.setKeywords(value), metaData.value.keywords.value?.replaceAll?.("，", ",")?.split?.(","));
    checkValueAndSet((value) => pdfDoc.value!.setSubject(value), metaData.value.subject.value);
  }

  async function download(filename: string) {
    updateMetaData();

    const pdfBytes = await pdfDoc.value!.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }

  return {
    load,
    metaData,
    download,
  };
}
